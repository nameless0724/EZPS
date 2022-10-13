const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true, }) )

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'api',
    password: '24-J1u9l8y9',
    port: 5432,
})

app.get('/', (req, res) => {
    res.json(
        { info: 'Node.js, Express, and Postgre API' }
    )
})

app.get("/login", async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM public.user ORDER BY id ASC');
        res.json(user.rows)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})