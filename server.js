const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const MongoClient = require('mongodb').MongoClient;

dotenv.config({ path: './config/.env' })
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'yankees-roster-api'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} database.`)
        db = client.db(dbName)
        const infoCollection = db.collection('player-info')
    
})
.catch(error => console.error(error))

app.get('/', (request, response) => {
    response.sendFile(__dirname + 'index.html')
})
    
app.get('/api/:playerName', (request, response) => {
    const infoCollection = db.collection('player-info')
    const playerName = request.params.playerName.toLowerCase()
    
    infoCollection.find({name: playerName}).toArray()
    .then(results => {
        console.log(results)
        response.json(results[0])
    })
    .catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on ${PORT}.`)
}) 