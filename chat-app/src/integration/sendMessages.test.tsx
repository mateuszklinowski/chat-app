import React from 'react'
import { renderWithApp } from '../utils/renderWithApp'
import { ConnectedMessages } from '../components/messages/connectedMessages'
import { ConnectedChat } from '../components/chat/connectedChat'
import { ConnectedCreateMessage } from '../components/createMessage/connectedCreateMessage'
import { State } from '../store/interfaces'
import { initSocketMock } from '../utils/initSocketMock'
import { fireEvent } from '@testing-library/react'
import { ApiEvents } from '../const'
import { NewMessage } from '../store/actions/chatActions'

// THis is an example of "integration" or feature tests approach
// This allow to write e2e-ish tests just with jest and RTL
//
// PROS: covers a lot of code at once :)
// CONS: covers a lot of code as once :(

const getInitialState = (): Partial<State> => ({
    chat: {
        messages: [
            {
                senderId: 'test_id',
                senderName: 'test_name',
                id: 'message_id',
                content: 'test message content',
                timestamp: 1593969453456,
            },
        ],
        unread: 0,
    },
    meta: {
        userId: 'test_name',
    },
})

const manualSocket = initSocketMock([])
jest.mock('../utils/getSocket', () => ({
    getSocketIOClient: () => {
        return manualSocket
    },
}))

describe('send and receive messages', () => {
    beforeEach(() => {
        manualSocket.resetTest()
    })

    it('send user typed messages and process received one', () => {
        const DecoratedComponent = () => (
            <ConnectedChat>
                <ConnectedMessages />
                <ConnectedCreateMessage />
            </ConnectedChat>
        )

        const { container, getByText } = renderWithApp(<DecoratedComponent />, {
            initialState: getInitialState(),
        })

        let responded = false
        const checkEmit = jest.fn((key, userMessage: NewMessage) => {
            if (!responded) {
                responded = true
                manualSocket.emit(ApiEvents.NewMessage, {
                    timestamp: 1593969453460,
                    content: userMessage.content,
                    id: 'randomID',
                    senderName: userMessage.senderName,
                    senderId: userMessage.senderId,
                })
            }
        })
        manualSocket.addEmitWatcher(checkEmit)
        const newMessageContent = 'new message content'
        const messageInput = container.querySelector(
            '#newMessage'
        ) as HTMLInputElement
        fireEvent.change(messageInput, {
            target: {
                value: newMessageContent,
            },
        })

        const submitButton = container.querySelector('.sendBtn')

        expect(container.querySelectorAll('.messageBox').length).toEqual(1)
        fireEvent.click(submitButton)

        expect(container.querySelectorAll('.messageBox').length).toEqual(2)
        expect(getByText(newMessageContent)).toBeTruthy()
    })
})
