const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'


const initialState = {

    users:  [
        {
            internalData:{
                userId: 0,
                becameFriendsDate: new Date(),
                dialogId: 1001,
                online: false,
                followed: false,
            },

            personalData: {
                profilePhotos: {
                    mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                    backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                },
                nameData: {
                    firstName: 'Elon',
                    lastName: 'Musk',
                },
                location: {
                    city: 'Texas',
                    country: 'USA',
                },
                activity: {
                    friendsCount: 10,
                    imagesCount: 25,
                    videosCount: 15,
                }
            },
        },
        {
            internalData:{
                userId: 1,
                becameFriendsDate: new Date(),
                dialogId: 1001,
                online: false,
                followed: false,
            },

            personalData: {
                profilePhotos: {
                    mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                    backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                },
                nameData: {
                    firstName: 'Elon',
                    lastName: 'Musk',
                },
                location: {
                    city: 'Texas',
                    country: 'USA',
                },
                activity: {
                    friendsCount: 10,
                    imagesCount: 25,
                    videosCount: 15,
                }
            },
        },{
            internalData:{
                userId: 2,
                becameFriendsDate: new Date(),
                dialogId: 1001,
                online: false,
                followed: false,
            },

            personalData: {
                profilePhotos: {
                    mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                    backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                },
                nameData: {
                    firstName: 'Elon',
                    lastName: 'Musk',
                },
                location: {
                    city: 'Texas',
                    country: 'USA',
                },
                activity: {
                    friendsCount: 10,
                    imagesCount: 25,
                    videosCount: 15,
                }
            },
        },{
            internalData:{
                userId: 3,
                becameFriendsDate: new Date(),
                dialogId: 1001,
                online: false,
                followed: false,
            },

            personalData: {
                profilePhotos: {
                    mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                    backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                },
                nameData: {
                    firstName: 'Elon',
                    lastName: 'Musk',
                },
                location: {
                    city: 'Texas',
                    country: 'USA',
                },
                activity: {
                    friendsCount: 10,
                    imagesCount: 25,
                    videosCount: 15,
                }
            },
        },{
            internalData:{
                userId: 4,
                becameFriendsDate: new Date(),
                dialogId: 1001,
                online: false,
                followed: false,
            },

            personalData: {
                profilePhotos: {
                    mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                    backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                },
                nameData: {
                    firstName: 'Elon',
                    lastName: 'Musk',
                },
                location: {
                    city: 'Texas',
                    country: 'USA',
                },
                activity: {
                    friendsCount: 10,
                    imagesCount: 25,
                    videosCount: 15,
                }
            },
        },
    ]
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.internalData.userId === action.userId){
                        console.log(!f.internalData.followed)
                        return {
                            ...f,
                            internalData: {...f.internalData, followed: !f.internalData.followed}
                        }
                    }
                    return f
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state
    }
}

export const toggleFollowAC = (userId) =>({type: TOGGLE_FOLLOW, userId: userId})
export const setFriendsAC = (users) =>({type: SET_USERS, users})

export default usersPageReducer