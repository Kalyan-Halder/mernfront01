import './App.css';
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Logout from "./component/Logout";
import Error from "./component/Error";
import Nav from "./component/Nav";
import Footer from './component/Footer';
import User from './component/User';
import Contact from "./component/Contact";
import "./index.css";

import { Switch, Route } from "react-router-dom";
import { createContext,useContext } from 'react';
import { useReducer } from 'react';
import { initial,reducer } from './reducer/useReducer';



const UserContext = createContext();
function App() {
  
  const[state,dispatch] = useReducer(reducer,initial);

  return (
    <div className="wrapper">
      
      <UserContext.Provider value={{state,dispatch}}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/user" component={User}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route path="" component={Error}></Route>
      </Switch>
      <Footer/>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
export {UserContext};
