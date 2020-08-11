const express = require('express')
const app = express()

app.get('/getMenu',(req,res)=>{
    res.send({list:['userinfo','homefirst']})
})

app.listen(3000)