import { connectDatabase } from "./pool.js";
import bodyParser from "body-parser";
import express from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid"; //universal unique identifier
import { generateJwt } from "./jwtGenerator.js";
import { auth } from "./auth.js";

const pool = connectDatabase()
const app = express()
const PORT = 8000

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

app.post('/signup', async (req, res) => {
    try {
        //take the email and password from the req.body
        const {
            email,
            password
        } = req.body

        //check if the user is already existing 
        const user = await pool.query(`SELECT * FROM public.user WHERE email = $1`, [email]) //$ for placement for array

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
        INSERT INTO public.user (id, email, password) VALUES ($1, $2, $3) RETURNING * 
        `, [uuidv4(), email, bcryptPassword]) //table database

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

app.post('/login', async (req, res) => {
    try{
        //take the email and password from the req.body
        const {
            email,
            password
        } = req.body;

        //check if the user is not existing
        const user = await pool.query(`SELECT * FROM public.user WHERE email = $1`, [email])
        
        console.log(user.rows.length)
        if (user.rows.length == 0) {
            res.status(401).send("User does not exists!")
        }
        
        //check if  the password matches using bcrypt
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect!")
        }
       
        //generate and return the JWT
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
        console.error(err.message);
        res.status(500).send({
            msg: "Unautheticated"
        });
    }
})

//for user profile
app.post('/newprofile', async (req, res) => {
    try {
        const {
            user,
            sss,
            philhealth,
            pagibig,
            tax
        } = req.body
        
        pool.query(`
        INSERT INTO public.profile (id, "user", sss, philhealth, pagibig, tax) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
        `, [uuidv4(), user, sss, philhealth, pagibig, tax])

        const message = "Profiling done successfully!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/profile', async (req, res) => {
    try{
        const profile = await pool.query(`SELECT * FROM public.profile ORDER BY id ASC`);
        res.json(profile)

    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})
