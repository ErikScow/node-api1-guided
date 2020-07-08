const express = require('express')
const shortid = require('shortid')

const server = express()

server.use(express.json())

let hubs = []

//GET

server.get('/', (req, res) => {
    res.json({hello: 'world'})
})

server.get('/hello', (req, res) => {
    res.json({messag: 'hello lambda'})
})

//CREATE

server.post('/api/hubs', (req, res) => {
    const hubsInfo = req.body
    hubsInfo.id = shortid.generate()
    hubs.push(hubsInfo)
    res.status(201).json(hubsInfo)
})

//READ

server.get('/api/hubs', (req, res) => {
    res.json(hubs)
})

//UPDATE

server.put('/api/hubs/:id', (req, res) => {
    
})

//DELETE

server.delete('/api/hubs/:id', (req, res) => {
    const {id} = req.params.id

    const deleted = hubs.find(hub => hub.id === id)
    console.log(deleted)
    if (deleted) {
        hubs = hubs.filter(hub => hub .id !== id)
        res.status(200).json(deleted)
    } else {
        res.status(404).json({message: 'hub not found'})
    }
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Listening on localhost: ${PORT}`)
})