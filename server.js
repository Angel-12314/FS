const express = require('express')
//const database = require('./database/db')
const app = express()
const category_Routs = require('./routs/categoryRouts')
const productRouts = require('./routs/productRouts')
app.use(express.json())

app.use('/category', category_Routs)
app.use('/products', productRouts)





app.listen(3001,()=>{
    console.log("Server listening at port 3001")
})

//database.products.push('iphone')
//console.log(database)