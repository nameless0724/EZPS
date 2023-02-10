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
            user_id,
            password
        } = req.body

        //check if the user is already existing 
        const user = await pool.query(`SELECT * FROM public.user_info WHERE user_id = $1`, [user_id]) //$ for placement for array

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

