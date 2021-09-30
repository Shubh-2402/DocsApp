import express from "express"
import cors from "cors"
import {} from "dotenv/config"
import authRoutes from "./routes/auth.js"


// APP CONFIG
const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


//API ROUTES

app.use("/auth",authRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log('Server running : '+PORT);
})