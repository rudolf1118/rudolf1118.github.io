import React from "react";
import './App.css';
import About from "./components/About";
import {Route, Routes,Switch } from "react-router-dom";
import CV from "./components/CV";
import About1 from "./components/About1";
import Timer from "./Timer";

const App=()=>{
    return (
        <div className={'site'}>
                <Routes>
                        <Route path={"/About"} element={<About1/>}/>
                        <Route path={"/"} element={<About/>}/>
                        <Route path={"/home"} element={<About/>}/>
                        <Route path={"/CV"} element={<CV/>}/>
                </Routes>
            <Timer/>
        </div>

    );
}

export default App;
