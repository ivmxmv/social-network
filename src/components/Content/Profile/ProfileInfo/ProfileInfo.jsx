import classes from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return <div className={classes.topHeader}>
        <div className={classes.topHeaderThumb}>
            <img src="https://oir.mobi/uploads/posts/2021-06/1623842345_4-oir_mobi-p-les-vnutri-priroda-krasivo-foto-4.jpg"
                 alt=""/>
        </div>
        <div className={classes.profileSection}>
            <div className={classes.row}>
                <div className={classes.profileMenu}>
                    <li><a href="">Timeline</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Friends</a></li>
                </div>
                <div className={classes.topHeaderAuthor}> </div>
                <div className={classes.profileMenu}>
                    <li><a href="">Photos</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">...</a></li>
                </div>
            </div>
            <div className={classes.controlBlockButton}> </div>
        </div>

    </div>
}

export default ProfileInfo