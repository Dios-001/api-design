import express from 'express'
import { protect } from './modules/auth'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/',(req,res,next)=>{
    req.shh_secret = "doggy"
    next()
})

app.get('/',(req,res)=>{
    console.log("hello from express")
    res.status(200)
    res.json({message:"hello"})
})

app.use("/api",protect, router)


export default app