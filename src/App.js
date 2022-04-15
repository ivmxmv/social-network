import './App.css';
import Header from "./components/Header/Header";
import SidebarLeft from './components/SidebarLeft/SidebarLeft'
import SidebarRight from "./components/SidebarRight/SidebarRight";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Documents from "./components/Content/Documents/Documents";
import Music from "./components/Content/Music/Music";
import News from "./components/Content/News/News";
import Profile from './components/Content/Profile/Profile'
import Settings from "./components/Content/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <SidebarLeft/>
                <SidebarRight/>

                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/documents' element={<Documents/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}


export default App;

