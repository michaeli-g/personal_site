const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const port = 8080
const sport = 443


const options = {
  key: fs.readFileSync('../privkey.pem'),
  cert: fs.readFileSync('../fullchain.pem')
};


const app = express()

app.use(express.static(__dirname));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))

app.enable('trust proxy')
app.use((req, res, next) => {
	    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/assets/index.html')
})

// app.listen(port, () => {
// 	console.log('Michaels listening on ' + port)
// })


http.createServer(app).listen(80)
https.createServer(options, app).listen(sport)
