import classes from './Users.module.css'
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";



const Users = (props) => {

    const setFriends = () => props.setFriends(
        [
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
                        firstName: 'Sam',
                        lastName: 'Smith',
                    },
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
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
                    followed: true,
                },

                personalData: {
                    profilePhotos: {
                        mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                        backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                    },
                    nameData: {
                        firstName: 'Sam',
                        lastName: 'Smith',
                    },
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
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
                    userId: 2,
                    becameFriendsDate: new Date(),
                    dialogId: 1001,
                    online: false,
                    followed: true,
                },

                personalData: {
                    profilePhotos: {
                        mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                        backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                    },
                    nameData: {
                        firstName: 'Sam',
                        lastName: 'Smith',
                    },
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
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
                    userId: 3,
                    becameFriendsDate: new Date(),
                    dialogId: 1001,
                    online: false,
                    followed: true,
                },

                personalData: {
                    profilePhotos: {
                        mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                        backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                    },
                    nameData: {
                        firstName: 'Sam',
                        lastName: 'Smith',
                    },
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
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
                    userId: 4,
                    becameFriendsDate: new Date(),
                    dialogId: 1001,
                    online: false,
                    followed: true,
                },

                personalData: {
                    profilePhotos: {
                        mainPhoto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
                        backgroundPhoto: 'https://www.teslarati.com/wp-content/uploads/2021/08/tesla-model-s-plaid-3.jpg',
                    },
                    nameData: {
                        firstName: 'Sam',
                        lastName: 'Smith',
                    },
                    location: {
                        city: 'Moscow',
                        country: 'Russia',
                    },
                    activity: {
                        friendsCount: 10,
                        imagesCount: 25,
                        videosCount: 15,
                    }
                },
            },
        ]
    )

    return <div className={classes.content}>
        <div className={classes.profile}>
            <ProfileInfo/>
        </div>

        {
            props.users.map(u => {

                    const toggleFollow = () => {
                        props.toggleFollow(u.internalData.userId)
                    }


                    return <div key={u.internalData.userId} className={classes.item}>

                        <div className={classes.headerThumb}>
                            <img src={u.personalData.profilePhotos.backgroundPhoto} alt=""/>
                        </div>

                        <div className={classes.itemContent}>
                            <div className={classes.avatar}>
                                <div className={classes.authorThumb}>
                                    <img src={u.personalData.profilePhotos.mainPhoto} alt=""/>
                                </div>
                            </div>

                            <div className={classes.authorPersonal}>
                                <a href=''
                                   className={classes.authorRef}>{u.personalData.nameData.firstName} {u.personalData.nameData.lastName}</a>
                                <div
                                    className={classes.authorLocation}>{u.personalData.location.city}, {u.personalData.location.country}</div>
                            </div>


                            <div className={classes.authorContent}>
                                <a href="">
                                    <div className={classes.contentItem}>
                                        <div className={classes.contentCounter}>{u.personalData.activity.friendsCount}</div>
                                        <div className={classes.contentText}>Friends</div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className={classes.contentItem}>
                                        <div className={classes.contentCounter}>{u.personalData.activity.imagesCount}</div>
                                        <div className={classes.contentText}>Photos</div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className={classes.contentItem}>
                                        <div className={classes.contentCounter}>{u.personalData.activity.videosCount}</div>
                                        <div className={classes.contentText}>Videos</div>
                                    </div>
                                </a>
                            </div>

                            <div className={classes.authorButton}>
                                <button>OPEN CHAT</button>
                                {
                                    u.internalData.followed ?
                                        <button onClick={toggleFollow}>UNFOLLOW</button> :
                                        <button onClick={toggleFollow}>FOLLOW</button>
                                }
                            </div>
                        </div>

                    </div>
                }
            )
        }

    </div>
}
export default Users