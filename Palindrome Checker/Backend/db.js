import {Pool} from 'pg'
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env)

const isProduction = process.env.NODE_ENV === "production" 

const pool = isProduction ? new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
})
 :new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME, 
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
})
// console.log("Password:",process.env.DB_PASSWORD)
// console.log("Type:", typeof process.env.DB_PASSWORD)
// console.log("LENGTH:",process.env.DB_PASSWORD?.length)


export default pool