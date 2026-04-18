import express from 'express'
import inputRouter from '../Backend/routes/userInput.js'


const app = express()
const port = 3000

app.use('/palindrome',inputRouter)

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});