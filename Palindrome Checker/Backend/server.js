import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import inputRouter from '../Backend/routes/userInput.js'
import cors from 'cors'
import pool from './db.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://javascript-palindrome-checker.vercel.app"
]
app.use(cors({
    origin: function(origin,callback)
{
    if(!origin){
        return callback(null,true)
    }

    if(allowedOrigins.includes(origin)){
        callback(null,true)
    }else{
        callback(new Error("Not allowed bt CORS"))
    }

}}))

app.use('/palindrome', inputRouter)

app.get('/', (req, res) => {
    res.send('Backend is running')
})
app.post('/api/data', async (req, res) => {

    const { input } = req.body
    try {
        const result = await pool.query(
            "INSERT INTO user_inputs(text) VALUES($1) RETURNING *",
            [input]
        )
        console.log("Full result:", result)
        console.log("Rows:", result.rows)
        res.json({
            message: "Saved",
            data: result.rows[0]
        })
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).json({ error: err.message })
    }
})


app.get('/api/history', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM user_inputs")
        res.json({
            message: "Fetched",
            data: result.rows
        })
    } catch (err) {
        console.log("Error: ", err)
    }
})

app.delete('/api/clear', async (req, res) => {
    // res.send('Hello Delete method')

    try {
        let check_data = await pool.query("SELECT * FROM  user_inputs")
        if (check_data.rows.length === 0) {
            return res.status(400).json({
                message: "No data to clear!"
            })
        } else {
            await pool.query("TRUNCATE TABLE user_inputs")
            return res.status(200).json({
                message: "Deleted Successfully",
            })
        }

    } catch (err) {
        console.log("Error: ", err)
    }
})
app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`)
});