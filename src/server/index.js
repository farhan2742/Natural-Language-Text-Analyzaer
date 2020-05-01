const dotenv = require('dotenv');
dotenv.config();
let projectData = {};
let path = require('path')
let aylien = require("aylien_textapi");
const express = require('express')

const app = express()
let textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' })
});


// Post routes

const data = [];

app.post("/addData", addData)

function addData(req, res) {
	projectData['date'] = req.body.date;
	projectData['temp'] = req.body.temp;
	projectData['comments'] = req.body.comments;

	res.send(projectData);
}

// Get routes

app.get("/all", sendInfo);

function sendInfo(req, res) {
	res.send(projectData);
}

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});