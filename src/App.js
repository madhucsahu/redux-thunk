import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import React from 'react';
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
     <Routes>
     <React.Fragment>
     <Route path="/" element={<Home />}></Route>
     <Route path="/addUser" element={<AddUser />}></Route>
     <Route path="/editUser/:id" element={<EditUser />}></Route>
     
       </React.Fragment>
     </Routes>
    </div>
  );
}

export default App;
