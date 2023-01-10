const express = require('express');

const app = express()

const {router} = require('./routes/routesBlogs')
const port = process.env.PORT || 3030

app.use('/',router)

app.listen(port,()=>{
    console.log('Server running in:', port)
})