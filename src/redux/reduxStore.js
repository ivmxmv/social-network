import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import postsPageReducer from "./postsPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    postsPage: postsPageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
})

let store = createStore(reducers);

export default store