import {Button, TextField, Typography} from "@mui/material";


const RegisterPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" fontFamily='Popins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin="normal" label="Имя" variant="outlined" placeholder="Введите ваше Имя"/>
            <TextField fullWidth={true} margin="normal" label="Username" variant="outlined" placeholder="Введите ваш username"/>
            <TextField fullWidth={true} margin="normal" label="E-mail" variant="outlined" placeholder="Введите ваш e-mail"/>
            <TextField type='password' fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль"/>
            <TextField type='password' fullWidth={true} margin="normal" label="confirmPassword" variant="outlined" placeholder="Повторите пароль"/>
            <Button sx={{fontFamily: 'Popins', marginTop: 2, marginBottom: 2,  width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins'}} textAlign='center'>У Вас есть аккаунт? <span className='incitingText'>Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;