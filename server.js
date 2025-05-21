const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000


app.get('/vast.xml',(req,res)=>{
    res.set('Content-Type', 'application/xml')
    res.sendFile(path.join(__dirname,'vast.xml'))
})

app.get('/',(req,res)=>{
    res.send('VAST Tag server is running')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})