import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {Ex1ES6} from "./component/Ex1ES6";
import Ex2Fibonacci from "./component/Ex2Fibonacci";
import Ex3BrowserDetail from "./component/Ex3BrowserDetail";
import Ex4Student from "./component/Ex4Student";
import Ex5ProfileCard from "./component/Ex5ProfileCard";
import Ex6SignIn from "./component/Ex6SignIn";
import Ex7Alert from "./component/Ex7Alert";
import Ex8Calculator from "./component/Ex8Calculator";
import Ex9Home from "./component/Ex9Home";
import Ex9LogIn from "./component/Ex9LogIn";
import Ex10ToDoApp from "./component/Ex10ToDoApp";
import Ex11StudentManager from "./component/Ex11StudentManager";
import {Ex12Counter} from "./component/Ex12Counter";
import ContactList from "./component/contacts/ContactList";
import AddContact from "./component/contacts/AddContact";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Ex14MedicalDeclaration} from "./component/Ex14MedicalDeclaration";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/ex1'}>Ex1: ES6</Link>
                </li>
                <li>
                    <Link to={'/ex2'}>Ex2: Fibonacci</Link>
                </li>
                <li>
                    <Link to={'/ex3'}>Ex3: Browser Detail</Link>
                </li>
                <li>
                    <Link to={'/ex4'}>Ex4: Student</Link>
                </li>
                <li>
                    <Link to={'/ex5'}>Ex5: Profile Card</Link>
                </li>
                <li>
                    <Link to={'/ex6'}>Ex6: SignIn</Link>
                </li>
                <li>
                    <Link to={'/ex7'}>Ex7: Alert</Link>
                </li>
                <li>
                    <Link to={'/ex8'}>Ex8: Calculator</Link>
                </li>
                <li>
                    <Link to={'/ex9/login'}>Ex9: Log in</Link>
                </li>
                <li>
                    <Link to={'/ex9/home'}>Ex9: Home</Link>
                </li>
                <li>
                    <Link to={'/ex10'}>Ex10: To do App</Link>
                </li>
                <li>
                    <Link to={'/ex11'}>Ex11: Student Manager</Link>
                </li>
                <li>
                    <Link to={'/ex12'}>Ex12: Counter</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/add-contact'}>Add new contact</Link>
                </li>
                <li>
                    <Link to={'/medical-declaration'}>Medical declaration</Link>
                </li>
            </ul>
            <Provider store={store}>
                <Routes>
                    <Route path={'/ex1'} element={<Ex1ES6/>}/>
                    <Route path={'/ex2'} element={<Ex2Fibonacci/>}/>
                    <Route path={'/ex3'} element={<Ex3BrowserDetail/>}/>
                    <Route path={'/ex4'} element={<Ex4Student/>}/>
                    <Route path={'/ex5'} element={<Ex5ProfileCard/>}/>
                    <Route path={'/ex6'} element={<Ex6SignIn/>}/>
                    <Route path={'/ex7'} element={<Ex7Alert/>}/>
                    <Route path={'/ex8'} element={<Ex8Calculator/>}/>
                    <Route path={'/ex9/login'} element={<Ex9LogIn/>}/>
                    <Route path={'/ex9/home'} element={<Ex9Home/>}/>
                    <Route path={'/ex10'} element={<Ex10ToDoApp/>}/>
                    <Route path={'/ex11'} element={<Ex11StudentManager/>}/>
                    <Route path={'/ex12'} element={<Ex12Counter/>}/>
                    <Route path={'/contact'} element={<ContactList/>}/>
                    <Route path={'/add-contact'} element={<AddContact/>}/>
                    <Route path={'/medical-declaration'} element={<Ex14MedicalDeclaration/>}/>
                </Routes>
            </Provider>
            <ToastContainer/>
        </>
    );
}

export default App;
