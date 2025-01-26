const http = require('http')
const url = require('url')


const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true)
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.params)
    console.log(req.query)
    console.log(parseUrl)
    res.end('abc')
})

server.listen(8888)