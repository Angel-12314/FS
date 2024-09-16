const express = require('express')
const database = require('../database/db')
const router = express.Router()
const {v4: uuidv4} = require('uuid')
const db = require('../database/db')

router.get('/all',(req,res)=>{
    try {
        res.json({
            categories: database.categories,
            message:  "Successfully fetched categories",
            status: "Success"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
method : post
*/

router.post('/add',(req,res)=>{
    
        const {name} = req.body 

        let newCategory = {
            
            id: uuidv4(),
            name
        }

        const include = database.categories.find(item => item.name === name)
        if(!include)  database.categories.push(newCategory); else (console.log(database.categories))
        
        try {
        res.json({
            categories: database.categories,
            message:  "Successfully added category",
            status: "Success"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
Route : http://localhost:3001/category/delete/id:
method : delete
*/

router.delete('/delete/:id',(req,res)=>{
    
    const {id} = req.params 
    /*let element = database.categories.find(item => item.id === id)
    const index = database.categories.indexOf(element)
    database.categories.splice(1,index)*/

    const newCategories = database.categories.filter(item=>item.id !== id)
    database.categories = newCategories
    
    try {
    res.json({
        categories: database.categories,
        message:  "Successfully deleted category",
        status: "Success - Deleted"
    })
} catch (error) {
    res.json({
        categories: [],
        message: error.message,
        status: "FAILED"
    })
}
})

/*
Route : http://localhost:3001/category/delete/id:
method : delete
*/

router.delete('/put/',(req,res)=>{
    
    const {id} = req.params 
    /*let element = database.categories.find(item => item.id === id)
    const index = database.categories.indexOf(element)
    database.categories.splice(1,index)*/

    const newCategories = database.categories.filter(item=>item.id !== id)
    database.categories = newCategories
    
    try {
    res.json({
        categories: database.categories,
        message:  "Successfully",
        status: "Success - PUT"
    })
} catch (error) {
    res.json({
        categories: [],
        message: error.message,
        status: "FAILED"
    })
}
})

module.exports = router