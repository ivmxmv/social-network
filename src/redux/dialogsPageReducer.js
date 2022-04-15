const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const initialState = {

    newMessageText: '',
    dialogTitles: [
        {
            chatName: 'Elon Musk',
            userId: 0,
            imgSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
            lastMsg: 'There will be last message',
            senderName: 'Elon'
        },

    ],
    messages: [
        {
            userId: 0,
            message: 'I am an entrepreneur, investor, and business magnate. I am the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.',
            messageId: 1,
            time: new Date(),
            userName: 'Elon',
            imgSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE'
        },
    ]
}

export const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{
            let messageObj = {
                messageId: 0,
                userId: 0,
                message: state.newMessageText,
                time: new Date(),
                userName: 'Jeff',
                imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT',
            }

            // Глубоко копируем только то, что меняем.
            // Причем глубина копирования определяется глубиной изменения объекта.
            return {
                ...state,
                // В конец массива добавили новый объект через запятую.
                messages: [...state.messages, messageObj],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message
            }

        default: return state
    }
}


export const sendMessageActionCreator =
    () => ({type: SEND_MESSAGE})

export const messageTextChangeActionCreator =
    (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message})


export default dialogsPageReducer