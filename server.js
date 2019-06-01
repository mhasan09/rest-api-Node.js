const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const contactRoute = require('./api/routes/contact')


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/contacts',contactRoute)

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)

})

const contacts = [
    {
        name : 'Rahman',
        email : 'xyz@gmail.com'
    },
    {
        name : 'Sadman',
        email : 'abc@gmail.com'
    },
]