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

app.post('/signup', async (req, res) => {
    try {
        //take the email and password from the req.body
        const {
            employee_id,
            user_name,
            password
        } = req.body

        //check if the user is already existing 
        const user = await pool.query(`SELECT * FROM public.entry WHERE employee_id = $1`, [employee_id]) //$ for placement for array

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
        INSERT INTO public.entry (id, employee_id, user_name, password) VALUES ($1, $2, $3, $4) RETURNING * 
        `, [uuidv4(), employee_id, user_name, bcryptPassword]) //table database

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
            employee_id,
            user_name,
            password
        } = req.body;

        //check if the user is not existing
        const user = await pool.query(`SELECT * FROM public.entry WHERE employee_id = $1`, [employee_id])
        
        console.log(user.rows.length)
        if (user.rows.length == 0) {
            res.status(401).send("User does not exists!")
        }
        
        //check if  the password matches using bcrypt
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or  is incorrect!")
        }
       
        //generate and return the JWT
        const token = generateJwt(user.rows[0])
       
        res.json({
           user: user.rows[0]
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

//for payroll_period
app.post('/payrollperiod', async (req, res) => {
    try {
        const {
            employee_id,
            period_start,
            period_end
        } = req.body
        
        pool.query(`
        INSERT INTO public.payroll_period (id, employee_id, period_start, period_end) 
        VALUES ($1, $2, $3, $4) RETURNING *
        `, [uuidv4(), employee_id, period_start, period_end])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/payrollperiod', async (req, res) => {
    try {
        const payroll = await pool.query(`SELECT * FROM public.payroll_period ORDER BY id ASC`);
        res.json(payroll)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for payslip_main
app.post('/payslip', async (req, res) => {
    try {
        const {
            employee_id,
            pay_run_date,
            gross_income,
            net_amount
        } = req.body
        
        pool.query(`
        INSERT INTO public.payslip_main (id, employee_id, pay_run_date, gross_income, net_amount) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `, [uuidv4(), employee_id, pay_run_date, gross_income, net_amount])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/payslip', async (req, res) => {
    try {
        const payslip = await pool.query(`SELECT * FROM public.payslip_main ORDER BY id ASC`);
        res.json(payslip)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for attendance
app.post('/attendance', async (req, res) => {
    try {
        const {
            employee_id,
            hours_rendered,
            period_start,
            period_end
        } = req.body
        
        pool.query(`
        INSERT INTO public.attendance_check (id, employee_id, hours_rendered, period_start, period_end) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `, [uuidv4(), employee_id, hours_rendered, period_start, period_end])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/attendance', async (req, res) => {
    try {
        const attendance = await pool.query(`SELECT * FROM public.attendance_check ORDER BY id ASC`);
        res.json(attendance)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for employee_salary
app.post('/employeesalary', async (req, res) => {
    try {
        const {
            employee_id,
            salary,
            position,
            status,
            effective_date
        } = req.body
        
        pool.query(`
        INSERT INTO public.employee_salary (id, employee_id, salary, position, status, effective_date) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
        `, [uuidv4(), employee_id, salary, position, status, effective_date])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/employeesalary', async (req, res) => {
    try {
        const status = await pool.query(`SELECT * FROM public.employee_salary ORDER BY id ASC`);
        res.json(status)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for employee_profile
app.post('/employee', async (req, res) => {
    try {
        const {
            employee_id,
            last_name,
            first_name,
            middle_name,
            date_hired,
            sss_num,
            pagibig_num,
            philhealth_num,
            tax_num
        } = req.body
         
        pool.query(`
        INSERT INTO public.employee_profile (id, employee_id, last_name, first_name, middle_name, date_hired, sss_num, pagibig_num, philhealth_num, tax_num) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
        `, [uuidv4(), employee_id, last_name, first_name, middle_name, date_hired, sss_num, pagibig_num, philhealth_num, tax_num])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/employee', async (req, res) => {
    try {
        const employee = await pool.query(`SELECT * FROM public.employee_profile ORDER BY id ASC`);
        res.json(employee)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for deduction
app.post('/deduction', async (req, res) => {
    try {
        const {
            employee_id,
            absent_amount,
            sss_contribution,
            pagibig_contribution,
            philhealth_contribution,
            tax_contribution,
            other
        } = req.body
        
        pool.query(`
        INSERT INTO public.deduction (id, employee_id, absent_amount, sss_contribution, pagibig_contribution, philhealth_contribution, tax_contribution, other) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
        `, [uuidv4(), employee_id, absent_amount, sss_contribution, pagibig_contribution, philhealth_contribution, tax_contribution, other])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/deduction', async (req, res) => {
    try {
        const deduction = await pool.query(`SELECT * FROM public.deduction ORDER BY id ASC`);
        res.json(deduction)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for allowance
app.post('/allowance', async (req, res) => {
    try {
        const {
            employee_id,
            rice,
            medical,
            clothing,
            transportation,
            other
        } = req.body
        
        pool.query(`
        INSERT INTO public.allowance (id, employee_id, rice, medical, clothing, transportation, other) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
        `, [uuidv4(), employee_id, rice, medical, clothing, transportation, other])

        const message = "Input done!"

        res.json({
            message
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/allowance', async (req, res) => {
    try {
        const allowance = await pool.query(`SELECT * FROM public.allowance ORDER BY id ASC`);
        res.json(allowance)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

//for display all informations
