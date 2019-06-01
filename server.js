const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/posts',(req,res)=>{
    res.send('yo')
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)

})