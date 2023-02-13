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

//signup
app.post('/signup', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body

        const user = await pool.query(`SELECT * FROM public.user_info WHERE username = $1`, [username])

        if (user.rows.length > 0) {
            res.status(401).send("User already exists!")
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(`
        INSERT INTO public.user_info (id, username, password) VALUES ($1, $2, $3) RETURNING *
        `, [uuidv4(), username, bcryptPassword])

        const token = generateJwt(newUser.rows[0])

        res.json({
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})
    
//login
app.post('/login', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        const user = await pool.query(`SELECT * FROM public.user_info WHERE username = $1`, [username]);

        console.log(user.rows.length)
        if (user.rows.length == 0) {
            res.status(401).send("User does not exists")
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or Username is incorrect!")
        }

        const token = generateJwt(user.rows[0])
        res.json({
            token
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//provide the auth middleware
app.get('/verify', auth, async (req, res) => {
    try{
        res.json(req.user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})

//payslip info
app.post('/payroll', async (req, res) => {
    try {
        const {
            user_id,
            last_name,
            first_name,
            net_pay,
            allowance,
            deduction,
            gross_net,
            date_start,
            date_end
        } = req.body

        pool.query(`
        INSERT INTO public.payroll_info (id, user_id, last_name, first_name, net_pay, allowance, deduction, gross_net, date_start, date_end) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *`, [uuidv4(), user_id, last_name, first_name, net_pay, allowance, deduction, gross_net, date_start, date_end])

        const message = "Payroll info successfully added!"
        res.json({message})
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

//payroll list
app.get('/payrolllist', async (req, res) => {
    try {
        const payroll = await pool.query(`SELECT * FROM public.payroll_info ORDER BY id ASC`);
        res.json(payroll)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//payslip detail
app.get('/payroll/:user_id', async (req, res) => {
    try {
        const payrollId = req.params.user_id

        const params = [payrollId]
        const statement = "SELECT * FROM public.payroll_info WHERE user_id = $1 LIMIT 1"

        const result = await pool.query(statement, params)
        res.json(result)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unautheticated"
        })
    }
})

//delete user
app.delete('/payrolldel/:user_id', async (req, res) => {
    try {
        const payslipId = req.params.user_id
        const params = [payslipId]
        const statement = "DELETE FROM public.payslip_info WHERE user_id = $1"

        const result = await pool.query(statement, params)
        res.json(result)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unautheticated"
        })
    }
})

