const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const config = require('./../config.json')
const path = require('path');
const { createChat } = require('./chat')

const server = () => {
    const chat = createChat(io)
    app.use('/', express.static(path.join(`${__dirname}/../chat-app/dist`)))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../chat-app/dist/index.html`))
    })

    io.on('connection', (socket) => {
        chat.addMember(socket)
    })

    http.listen(config.port, () => {
        console.log(`listening on *:${config.port}`)
    })
}


module.exports = {
    server,
}