const express = require('express')
const app = express()
app.get('/', (request, response) => {
  response.json({
    name: 'aditya',
    age: '28',
    location: 'visakhapatnam',
  })
})
app.listen(3000)
