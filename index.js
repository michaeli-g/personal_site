const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const port = 8080
const sport = 443


const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};


const app = express()

app.use(express.static(__dirname));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))



app.get('/', (req,res) => {
	res.sendFile(__dirname + '/assets/index.html')
})

// app.listen(port, () => {
// 	console.log('Michaels listening on ' + port)
// })


//http.createServer(app).listen(port)
https.createServer(options, app).listen(sport)
