import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


function Profile() {
    return <div className={classes.content}>

        <div className={classes.profile}>
            <ProfileInfo/>
        </div>

        <div className={classes.posts}>
            <PostsContainer/>
        </div>

    </div>
}

export default Profile