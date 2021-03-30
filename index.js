const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const env = dotenv.config().parsed
const app = express()

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Emma Jane')
})

app.listen(env.PORT, () => {
    console.log('server is running ..')
})