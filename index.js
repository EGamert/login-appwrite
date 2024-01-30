// server.js
const express = require('express');
const cors = require('cors');
const { Client } = require(`appwrite`)
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const appwrite = new Client()

appwrite
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a38fc7a027da2af90b')



app.get('/api/data', (req, res) => {
  res.send("server running...")
});
 
app.get('/', (req, res)=>{
  res.send("runninggggg")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
