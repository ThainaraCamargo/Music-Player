import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Favorites from "../favorites"
import Feed from "../feed"
import Library from "../library";
import Player from "../player";
import "./style.css";
import Sidebar from "../../components/sidebar";
import Login from "../auth/login"

export default function Home() {
  return (
    <Router>
        <div className="mainBody">
        <Login/>  
        {/* <Sidebar/>
     <Routes>
        <Route path="/" element={<Library/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/player" element={<Player/>}/>
     </Routes>  */}
        </div>
    </Router>
  );
}


