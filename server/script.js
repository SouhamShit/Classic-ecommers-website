require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const NameModel = require('./names')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.CONNECTION)

app.post('/login',(req,res)=>{
    const {email , password} = req.body
    NameModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("sucsess")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("user not exsist")
        }
    }).catch(err=>console.log(err))
})

app.post('/register', (req,res)=>{
    NameModel.create(req.body)
    .then(names => res.json(names))
    .catch(err=> res.json(err))
})

app.listen(8000,()=>{
    console.log("surver run");
})

