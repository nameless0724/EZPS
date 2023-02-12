import { connectDatabase } from "./pool.js";
import bodyParser from "body-parser";
import express from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid"; //universal unique identifier
import { generateJwt } from "./jwtGenerator.js";
import { auth } from "./auth.js";
import cors from "cors"; //cross-origin resource sharing (CORS)

const pool = connectDatabase()
const app = express()
const PORT = 8000
 
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

pool.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(PORT, () => {
            console.log(`Server has started on http://localhost:${PORT}`)
        })
    }
})

app.post('/login', async (req, res) => {
    try {
        //take the email and password from the req.body
        const {
            username,
            password
        } = req.body

        //check if the user is already existing 
        const user = await pool.query(`SELECT * FROM public.user_info WHERE username = $1`, [username]) //$ for placement for array

        if (user.rows.length > 0) {
            res.status(401).send("User already exists!")
        }

        //setup bcrypt for password hashing
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        //add the new user into the database
        //generate the uuid using the uuidv4() function
        const newUser = await pool.query(`
        INSERT INTO public.user_info (id, username, password) VALUES ($1, $2, $3) RETURNING * 
        `, [uuidv4(), username, bcryptPassword]) //table database

        //generate and return the JWT token
        const token = generateJwt(newUser.rows[0])

        res.json({
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

//provide the auth middleware
app.get('/verify', auth, async (req, res) => {
    try{
        res.json(req.user)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})

app.get('/payslipList', auth, async (req, res) => {
    try{
        const userId = req.user.id

        const params = [userId]
        const statement = "SELECT * FROM public.payslip_info WHERE user_id = $1"

        const result = await pool.query(statement, params)
        res.json(result)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})


// -payslip detail
    // get given id
app.get('/payslip/:id', auth, async (req, res) => {
    try{
        const payslipId = req.params.id

        const params = [payslipId]
        const statement = "SELECT * FROM public.payslip_info WHERE id = $1 LIMIT 1"

        const result = await pool.query(statement, params)
        res.json(result)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})


// - delete user (admin)
    // delete given id

app.delete('/user/:id', auth, async (req, res) => {
    try{
        const payslipId = req.params.id

        const params = [payslipId]
        const statement = "DELETE FROM public.payslip_info WHERE id = $1"

        const result = await pool.query(statement, params)
        res.json(result)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})

// -attendance add (admin)
    // add daily hour per user

app.post('/attendance', auth, async (req, res) => {
    try{

        let attendance = req.body;
        // attedance should look like this
        /* 
        [
            {
                "userId": "1",
                "hours": [8, 8, 8, 8, 8] // M T W TH F
            },
            {
                "userId": "2",
                "hours": [5, 8, 8, 8, 8] // M T W TH F
            }
        ]
        */ 
        const attendanceList = req.body.map((attedance) => {
            attedance.id = uuidv4()
            return attedance
        })

        attendanceList.array.forEach(element => {
            const { id, user_id, date, hours } = element
            const params = [id, user_id, date, hours]
            const statement = "INSERT INTO public.attendance_info (id, user_id, date, hours) VALUES ($1, $2, $3, $4)"

            pool.query(statement, params)
        });
        

        const result = { "message": "attendance successfully saved!" }
        res.json(result)
        
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})



// -add user
    // compute salary based on attendance and user info

app.post('/user', auth, async (req, res) => {
    try{

        const { id, username, password, isAdmin } = req.body
        /*
        {
            "id": "autogenerate",
            "username": "asdf",
            "password": "asdf"
        } 
            */

        const params = [id, username, password, isAdmin]
        const statement = "INSERT INTO user_info (id, username, password, is_admin) VALUES ($1, $2, $3. $4)"
        pool.query(statement, params)

        const result = { "message": "user successfully saved!" }
        res.json(result)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})

// -add payroll info
    // compute salary based on attendance and user info
app.post('/payrollInfo', auth, async (req, res) => {
    try{
        const payrollInfo = req.body
    
        // - id (PK)
        // - user_id
        // - first_name
        // - last_name
        // - net_pay
        // - allowance
        // - deduction

        const { user_id, last_name, first_name, net_pay, allowance, deduction } = req.body
        const id = uuidv4()
        const params = [id, user_id, last_name, first_name, net_pay, allowance, deduction]
        const statement = "INSERT INTO user_info (id, user_id, last_name, first_name, net_pay, allowance, deduction) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        pool.query(statement, params)

        const result = { "message": "payroll info successfully saved!" }
        res.json(result)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})