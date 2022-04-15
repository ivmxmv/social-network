import Posts from "./Posts";
import {addPostActionCreator, postTextChangeActionCreator} from "../../../../redux/postsPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText
})
const mapDispatchToProps = (dispatch) => ({
    postTextChange: text => dispatch(postTextChangeActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator())
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
