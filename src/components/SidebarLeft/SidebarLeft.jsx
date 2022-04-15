import classes from './SidebarLeft.module.css'
import {NavLink} from "react-router-dom";

function SidebarLeft(){
    return <div className={classes.sidebar}>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/profile">Profile</NavLink>
        </div>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/dialogs">Messages</NavLink>
        </div>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/users">Users</NavLink>
        </div>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/documents">Docs</NavLink>
        </div>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/music">Music</NavLink>
        </div>
        <div className={classes.itemDiv}>
            <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to="/settings">Sets</NavLink>
        </div>
    </div>
}


export default SidebarLeft