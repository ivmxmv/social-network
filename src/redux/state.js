import userDataReducer from "./userDataReducer";
import postsPageReducer from "./postsPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";


let store = {
    _state: {
        userData: {
            userId: 0,
            userName: 'Ivan',
            imgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=albu',
        },
        //Для страницы Dialogs
        dialogsPage: {

            newMessageText:'',
            dialogTitles: [
                {
                    chatName: 'Nikita',
                    userId: 1,
                    imgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=album',
                    lastMsg: 'Come close',
                    senderName: 'Nikita'
                },
                {
                    chatName: 'Vladilen',
                    userId: 2,
                    imgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=album',
                    lastMsg: 'Come close',
                    senderName: 'Vladilen'
                },
                {
                    chatName: 'Karen',
                    userId: 3,
                    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/413px-Felis_silvestris_silvestris.jpg',
                    lastMsg: 'Come close',
                    senderName: 'Karen'
                }
            ],
            messages: [
                {
                    userId:1,
                    message: 'Лесные кошки очень пугливы и стараются не приближаться к поселениям людей. Они ведут скрытный и одиночный образ жизни и удерживают территорию от 1 км2',
                    messageId: 1,
                    time: new Date(2022, 2, 20, 18, 19),
                    userName: 'Ivan',
                    imgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=albu'
                },
                {
                    userId:1,
                    message: 'Когда начало урока?',
                    messageId: 2,
                    time: new Date(2022, 2, 20, 18, 20),
                    userName: 'Ivan',
                    imgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=albu'
                },
                {
                    userId:1,
                    message: 'Где тут стендап?',
                    messageId: 3,
                    time: new Date(2022, 2, 20, 18, 21),
                    userName: 'Ivan',
                    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/413px-Felis_silvestris_silvestris.jpg'
                }
            ]
        },

        //Для страницы Posts
        postsPage: {
            newPostText: '',
            posts: [
                {
                    id: 0,
                    text: 'Sorry, please excuse me for my mess\n' +
                        'My heart\'s been pouring through my chest\n' +
                        'I fell through corridors of broken floors\n' +
                        'I\'m sorry that I left',
                    likesCount: 74,
                    time: new Date(),
                    userName: 'Ivan',
                    userImgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/413px-Felis_silvestris_silvestris.jpg'

                },
                {
                    id: 1,
                    text: 'Fell asleep in my new bed\n' +
                        'I can\'t feel happy in my head\n' +
                        'I see two moons and nothing more\n' +
                        'I close my door\n' +
                        'I\'m left with less',
                    likesCount: 76,
                    time: new Date(),
                    userName: 'Ivan',
                    userImgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=albu'

                },
                {
                    id: 2,
                    text: 'I don\'t feel surreal (yeah)\n' +
                        'No, I don\'t feel too clean (ohh)\n' +
                        'And I don\'t want to be the one to make you cry\n' +
                        'On plain sight, I\'ll start a fight\n' +
                        'I\'ll tell your friends that I lost my mind\n' +
                        'And it\'ll take a while but I\'ll start to smile\n' +
                        'Broke your windows and broken tiles\n' +
                        'Frozen willows, we\'ll go for miles\n' +
                        'Hope we\'ll let go, yeah, that\'s a start\n' +
                        'And you don\'t know where my soul\'s headed\n' +
                        'And I\'m forgetting you so I say',
                    likesCount: 89,
                    time: new Date(),
                    userName: 'Ivan',
                    userImgSrc: 'https://sun9-34.userapi.com/impg/XGKyN3Lm6d5dOEb3UKiwGCS6rq6VF5ZTabB0ig/Eb14WklcKoo.jpg?size=1197x1600&quality=96&sign=ef126065dd54d6ce46db22e1167a73b3&type=albu'
                }
            ]
        }
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.postsPage =  postsPageReducer(this._state.postsPage,this._state.userData,action)
        this._state.dialogsPage =  dialogsPageReducer(this._state.dialogsPage,this._state.userData,action)
        this._state.userData =  userDataReducer(this._state.userData,action)

        this._callSubscriber(this._state)
    }

}

export default store
window.store = store