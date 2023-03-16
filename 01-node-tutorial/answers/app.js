const http = require('http');

const server = http.createServer((req, res) => {         //common practice to call these paramenters req/requirement and res/response
if(req.url === '/') {

res.end('Welcome to our homepage')
}
if(req.url === '/about') {
    res.end('Here is our short history')
}
res.end(`
<h1>Ooops!</h1>
<p>We can't seem to be able to find the page</p>
<a href="/">back home</a>
`)
})

server.listen(5000)  //the response will be in your browser, at localhost:5000