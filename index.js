const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello deep!')
})
app.get('/deep', (req, res) => {
  res.send('deep')
})

app.get('/twt',(req,res)=>{
  res.send("hiii")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
