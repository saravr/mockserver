const http = require('http')

const port = process.env.PORT || 7911

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const fruits = [
        "apples",
        "passion",
        "kiwi",
        "strawberries"
    ]
    const body = fruits.map(function(fruit) {
        return {name: fruit}
    })
    res.end(JSON.stringify(body))
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
