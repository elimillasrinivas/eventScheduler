const express=require("express")
const mongoose=require("mongoose")
const app=express()
const PORT=8000
const router=require("./routes/eventRoute")

app.use(express.json())
mongoose.connect("mongodb+srv://event:event@cluster0.uwaveia.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DB Connected"))

app.get((req,res)=>{
    res.json({
        message:"Success"
    })
})

app.use("/v1",router)
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))