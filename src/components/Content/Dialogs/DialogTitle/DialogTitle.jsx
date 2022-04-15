import classes from './DialogTitle.module.css'
import {NavLink} from "react-router-dom";

function DialogTitle(props) {
    return <div>
        <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                 to={`/dialogs/${props.userId}`}>
            <div className={classes.box}>
                <div className={classes.image}>
                    <img src={`${props.imgSrc}`} alt=""/>
                </div>

                <div className={classes.nameBox}>
                    <p>{props.name}</p>
                </div>
                <div className={classes.senderMessageBox}>
                    <p>{`${props.senderName}: ${props.lastMessage}`}</p>
                </div>

            </div>
        </NavLink>
    </div>
}

export default DialogTitle