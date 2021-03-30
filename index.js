const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const env = dotenv.config().parsed
const app = express()
const port = 5713
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Emma Jane')
})

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.xzynl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, client) {
    const products = client.db("emmajanestore").collection("products");
    console.log('database connected succesfully')
});


app.listen(env.PORT || port, () => {
    console.log('server is running ..')
})