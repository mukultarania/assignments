const express = require('express')
const app = express()
const port = 3000
const locdata = {
  "Name": "Mukul",
  "Kaam ": "Krle"
}

async function getFakeData() {
  const fakedata = await fetch("https://fakerapi.it/api/v1/persons");
  const response = await fakedata.json;
  console.log(response);
  return response;
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/data', (req, res) => {
  res.send(locdata)
})

app.get('/port', (req, res) => {
  res.send("Port " + port)
})

app.get('/fakeData', (req, res) => {
  var fakedata = getFakeData();

  res.send(fakedata);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})