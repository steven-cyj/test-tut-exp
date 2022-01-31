const http = require('http');

const server = http.createServer((req, res) => {
    // req is the request from the web browser
    // res is what we are sending back
    res.write('Welcome to our home page')
    res.end()
})

server.listen(5000);