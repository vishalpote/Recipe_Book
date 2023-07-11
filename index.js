const express = require('express')
const app = express()
const path=require('path')
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname,'About.html'))
  })

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'contact.html'))
  })
  
  
  app.get('/veg', (req, res) => {
    res.sendFile(path.join(__dirname,'veg.html'))
  })


  app.get('/non-veg', (req, res) => {
    res.sendFile(path.join(__dirname,'non-veg.html'))
  })

  app.get('/description', (req, res) => {
    res.sendFile(path.join(__dirname,'description.html'))
  })






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})