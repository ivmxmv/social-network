import classes from './Post.module.css'

function Post(props) {
    return <div className={classes.post}>

        <div className={classes.header}>
            <a className={classes.headerImage} href={``/*props.id*/}>
                <img src={props.userImgSrc} alt=""/>
            </a>
            <div>
                <a href={``/*props.id*/}>{props.userName}</a>
            </div>
            <div className={classes.headerTime}>
                <p>{`${props.time.toDateString().slice(4, 15)} at ${props.time.toTimeString().slice(0, 5)}`}</p>
            </div>

        </div>

        <div className={classes.text}>
            <output>{props.text}</output>
        </div>

        <div className={classes.footer}>
            <button>like</button>
            <output> {props.likesCount}</output>
            <button>comment</button>
            <button>share</button>
        </div>
    </div>
}

export default Post