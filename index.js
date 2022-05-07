const express = require('express')
const app = express()
const port = 3005


app.use(express.static(__dirname));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))



app.get('/', (req,res) => {
	res.sendFile(__dirname + '/assets/index.html')
})

app.get('/about', (req,res) => {
	res.sendFile(__dirname + '/assets/about.html')
})

app.get('/contact', (req,res) => {
	res.sendFile(__dirname + '/assets/contact.html')
})

app.listen(port, () => {
	console.log('Michaels listening on ' + port)
})
