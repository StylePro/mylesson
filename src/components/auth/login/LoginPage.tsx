import {Button, TextField, Typography} from "@mui/material";


const LoginPage = () => {

    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" fontFamily='Popins' textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin="normal" label="E-mail" variant="outlined" placeholder="Введите ваш e-mail"/>
            <TextField type='password' fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль"/>
            <Button sx={{fontFamily: 'Popins', marginTop: 2, marginBottom: 2,  width: '60%'}} variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins'}} textAlign='center'>У Вас нет аккаунта? <span className='incitingText'>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;