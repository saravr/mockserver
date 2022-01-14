const http = require('http')

const port = process.env.PORT || 8000

const router = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    console.log("PATH: " + req.url)
    console.log("REQ HEADERS: " + JSON.stringify(req.headers))
    var body = ""
    switch (req.url) {
    case "/":
        const fruits = [
            "apples",
            "passion",
            "kiwi",
            "strawberries"
        ]
        body = fruits.map(function(fruit) {
            return {name: fruit}
        })
        break
    case "/names":
        const names = [
            "Bob",
            "John",
            "Steve",
        ]
        body = names.map(function(name) {
            return {name: name}
        })
        break
    }
    res.end(JSON.stringify({status: "Ok", data: body}))
    console.log("Sent response, response headers: ", res.getHeaders())
}

const server = http.createServer(router)

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
