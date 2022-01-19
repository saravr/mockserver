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
    case "/contacts":
        const contacts = [
            {
                firstName: "Bob",
                lastName: "Woodword",
                address: {
                    streetAddress: "1800 Great America Pkwy",
                    city: "Santa Clara",
                    state: "CA",
                    zip: "95054",
                    location: {
                        latitude: -37.99,
                        longitude: 128.55
                    }
                }
            },
            {
                firstName: "Clay",
                lastName: "Thompson",
                address: {
                    streetAddress: "515 Ruby Ct",
                    city: "Palo Alto",
                    state: "CA",
                    zip: "95031",
                    location: {
                        latitude: -37.10,
                        longitude: 128.33
                    }
                }
            },
            {
                firstName: "John",
                lastName: "Doe",
                address: {
                    streetAddress: "4690 Sunset Blvd",
                    city: "Los Angeles",
                    state: "CA",
                    zip: "90519",
                    location: {
                        latitude: -36.12,
                        longitude: 120.49
                    }
                }
            },
        ]
        body = contacts
        break
    }

    res.end(JSON.stringify({status: "Ok", data: body}))
    console.log("Sent response, response headers: ", res.getHeaders())
}

const server = http.createServer(router)

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
