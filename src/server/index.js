const dotenv = require('dotenv');
dotenv.config();
let projectData = {};
let path = require('path')
let aylien = require("aylien_textapi");
const express = require('express')
const serverless = require('serverless-http');

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

app.post("/extractSummeryUrl", extractSummeryUrl)

function extractSummeryUrl(req, res) {
	textapi.summarize({
		url: req.body.url,
		sentences_number: 5
	}, 
	function(error, response) {
		if (error === null) { 
    		projectData.extractedSummary = response;
    		res.send(projectData)
  		}   
    });
}

app.post("/extractSummaryText", extractSummaryText)

function extractSummaryText(req, res) {
	console.log(req.body.heading);
	textapi.summarize({
		title: req.body.heading,
		text: req.body.text,
		sentences_number: 5
	}, 
	function(error, response) {
		if (error === null) { 
    		projectData.extractedSummary = response;
    		console.log(response)
    		res.send(projectData)
  		}   
    });
}

app.post('/extractHashtagUrl', extractHashtagUrl)

function extractHashtagUrl(req, res) {
	textapi.hashtags({
		url: req.body.url
	}, 
	function(error, response) {
		if (error === null) {
    		projectData.extractedHashtags = response;
    		res.send(projectData)
  		}   
    });
}


app.post('/extractHashtagText', extractHashtagText)

function extractHashtagText(req, res) {
	textapi.hashtags({
		text: req.body.text
	}, 
	function(error, response) {
		if (error === null) {
    		projectData.extractedHashtags = response;
    		res.send(projectData)
  		}   
    });
}


app.post('/extractArticle', extractArticle)

function extractArticle(req, res) {
	textapi.extract({
		url: req.body.url,
 		best_image: false
	}, 
	function(error, response) {
		if (error === null) {
    		projectData.extractedArticle = response;
    		res.send(projectData)
  		}   
    });
}

app.post('/extractEntityUrl', extractEntityUrl)

function extractEntityUrl(req, res) {
	textapi.entities({
		url: req.body.url
	}, 
	function(error, response) {
		projectData.extractedEntities = response;
        res.send(projectData)
    });
}

app.post('/extractEntityText', extractEntityText)

function extractEntityText(req, res) {
	textapi.entities({
		text: req.body.text
	}, 
	function(error, response) {
		projectData.extractedEntities = response;
        res.send(projectData)
    });
}

// Get routes

app.get("/all", sendInfo);

function sendInfo(req, res) {
	res.send(projectData);
}

http.createServer(function(req, res) {
  // Homepage
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the App");
	} else {
	    res.writeHead(404, { "Content-Type": "text/plain" });
	    res.end("404 error! File not found.");
	}
}).listen(1337, "localhost");

// designates what port the app will listen to for incoming requests
/*
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
*/
module.exports.handler = serverless(app);