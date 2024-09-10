/*const http = require('http')
const fs = require('fs')
const path = require('path')

console.log(http)

const server = http.createServer((request,response) => {
    const {url} = request
    if (url =='/login'){
        response.write('<h1>LOGIN</h1>')
        response.end()
    }
    if(url =='/signup'){
        response.write('<h1>SIGNUP</h1>')
        response.end()
    } 
})

server.listen(3000,() => {
    console.log(`Server listening at PORT : ${3000}`)
})*/

const data = [{name:"A"}, {name:"B"}, {name:"C"}]
const express = require('express')
const app = express()

app.get('/getNames',(req,res)=>{
    console.log("Server listening at port 3000")
})

app.listen(3000,()=>{
    console.log("Server listening at port 3000")
})