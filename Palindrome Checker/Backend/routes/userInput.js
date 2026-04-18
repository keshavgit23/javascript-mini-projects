import express from 'express'
const router = express.Router()
import pool from '../db.js'

router.get('/', (req, res) => {
    res.send('Hello Palindrome checker')
})

export default router