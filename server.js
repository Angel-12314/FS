const express = require('express')
const PORT = 3000
const app= express()

app.use(express.json())

const token = "TOP_SECRET"

let products = [{name:'iPhone12 Case', price: '999'},{name:'iPhone13 Case', price: '1199'},{name:'iPhone14 Case', price: '1499'}]

const validator = (req,res,next)=>{
    const{name, price} = req.body

    if(!name || !price) res.json({error:"Validation failed"})
    else next()
}

const isAuthorised = (req,res,next)=>{
    if (req.header.authorisation === token) next()
    else res.json({error: 'UNAUTHORISED'})
}

//--PUBLIC ROUTS--
app.get('/', (req,res)=>{
    res.json({products})
})
//--PRIVATE ROUTES--

app.post('/products/add',isAuthorised,(req,res)=>{
    const{name,price}=req.body
    const newProduct ={
        name,
        price,
    }
    products.push(newProduct)
    res.send('product added')
})


//--Authentication--

app.post('/auth',(req,res)=>{
    const {email,password}=req.body
    if(email==='admin@gmail.com' && password ==='password'){
        res.send({token})
    } else{
        res.send({message:"UNAUTHORISED"})
    }
    res.send('product added')
})

app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`)
})