const express = require('express')
const database = require('./database/db')
const app = express()
const categoryRouts = require('./routs/categoryRouts')

console.log(categoryRouts.stack)

app.use('/', categoryRouts)

app.use(express.json())

app.get('/',(req,res) => {
    try {
        console.log(document)
    } catch (error) {
        res.status(203).send(error.message)
    }
})

app.listen(3001,()=>{
    console.log("Server listening at port 3001")
})

//database.products.push('iphone')
//console.log(database)