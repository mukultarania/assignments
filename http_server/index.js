const express = require('express')
const app = express()
const port = 3000
const data = {
    "Name": "Mukul",
    "Kaam ": "Krle"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send(data)
  })

app.get('/port', (req, res) => {
    res.send("Port "+port)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})