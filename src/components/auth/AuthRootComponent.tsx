import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import '../../index.css';
import LoginPage from "./login/LoginPage.tsx";
import RegisterPage from "./register/RegisterPage.tsx";
import  '../auth/register/style.scss'


const AuthRootComponent = () => {
    const location = useLocation();
    return (
        <div className='root'>
            <div className="form">
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth={640}
                margin='auto'
                padding={5}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login'? <LoginPage/> : location.pathname === '/register' ? <RegisterPage/>: null}
                </Box>
            </div>
        </div>
    )
};



export default AuthRootComponent;