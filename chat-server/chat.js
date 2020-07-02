const { v4: uuid } = require('uuid')

// Super basic chat server

const createChat = (io) => {
    const userMessageToApiMessage = (userMessage) => ({
        ...userMessage,
        timestamp: new Date().getTime(),
        id: uuid()
    })


    const addMember = (socket) => {
        const userId = uuid();
        socket.emit('id', userId)
        socket.on('message', (msg) => {
            io.emit('newMessage', userMessageToApiMessage(msg))
        })
    }

    return {
        addMember,
    }
}

module.exports =  {
    createChat
}