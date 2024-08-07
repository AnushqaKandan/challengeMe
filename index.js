import express from 'express'
import path from 'path'
import {connection as db} from './config/index.js'

// Create an express app
const app = express()
const port = +process.env.PORT  || 4000
const router = express.Router()



// Endpoint
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/users', (req, res) => {
  try{
    const strQry = `SELECT firstName, lastName, age, emailAdd FROM Users;`
    db.query(strQry, (err, result) => {
        // `Unable to fetch all users`
        if(err) throw new Error(err)
       res.json({
    status: res.statusCode,
    result
    })

   })
  } catch(e){
     res.json({
        status: 404,
        msg: e.message
     })
  }
})