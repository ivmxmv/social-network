import Users from './Users'
import {connect} from "react-redux";
import {setFriendsAC, toggleFollowAC} from "../../../redux/usersPageReducer";

const mapStateToProps = (state) =>{
    return ({
        users: state.usersPage.users,
    })
}

const mapDispatchToProps = (dispatch) =>{
    return ({
        toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
        setFriends: (users) => dispatch(setFriendsAC(users)),
    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer