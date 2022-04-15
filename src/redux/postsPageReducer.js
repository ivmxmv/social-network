const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {

    newPostText: '',
    posts: [
        {
            id: 0,
            text: "Jeff in slang definition: (printing slang, intransitive) To play or gamble with em quads, throwing them as dice.",
            likesCount: 14,
            time: new Date(),
            userName: 'Jeff',
            userImgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT'
        },
    ]
}

const postsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 0,
                text: state.newPostText,
                likesCount: 0,
                time: new Date(),
                userName: 'Jeff',
                userImgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT'
            }
            return  {
                ...state,
                // Добавили первый элемент через запятую.
                posts: [post, ...state.posts],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            }

        default:
            return state
    }


}


export const addPostActionCreator =
    () => ({type: ADD_POST})

export const postTextChangeActionCreator =
    (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default postsPageReducer
