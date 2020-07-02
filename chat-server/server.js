const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const config = require('./../config.json')
const { createChat } = require('./chat')

const server = () => {
    const chat = createChat(io)

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