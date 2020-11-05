const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res)=> res.send('hellloooo, my name is john, i am working!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
