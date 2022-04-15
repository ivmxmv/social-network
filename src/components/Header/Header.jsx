import classes from './Header.module.css'

function Header(){
    return<div className={classes.header}>
        <div className={classes.logo}>
                <img
                    src="https://html.crumina.net/html-olympus/img/logo.webp"
                    alt="Olympus"/>
        </div>
    </div>
}

export default Header