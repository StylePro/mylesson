import './App.css'
import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute.tsx";
import Home from "./components/home/Home.tsx";

import AuthRootComponent from "./components/auth/AuthRootComponent.tsx";

function App() {

    return (
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="login" element={<AuthRootComponent/>}/>
            <Route path="register" element={<AuthRootComponent/>}/>
        </Routes>
    )
}

export default App
