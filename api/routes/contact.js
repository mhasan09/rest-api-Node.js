const express = require('express')
const router = express.Router()

//get 
router.get('/',(req,res,next)=>{
    res.json({
        message : 'yo'
    })
})

//Posts

router.post('/',(req,res,next)=>{
    res.json({
        message : "sup" 

    })

})

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    res.json({
        id
    })
})


module.exports = router