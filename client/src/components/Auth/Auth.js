import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input';
import { useNavigate } from "react-router-dom"
import {signin , signup} from '../../actions/auth';
import { useDispatch } from 'react-redux';


const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const [showPassword , setShowPassword] = useState(true);
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isSignUp){
            dispatch(signup(formData, navigate))
        }else{
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) =>{
            setFormData({...formData,[e.target.name]: e.target.value})
    }

    const switchMode = () =>{
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

  return (
   <Container component='main' maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar} >
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sing In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus  />
                                <Input name='lastName' label="Last Name" handleChange={handleChange} autoFocus half />
                            </>
                        )
                    }
                    <Input name='email'  label="Email Address" handleChange={handleChange} type="email" />
                    <Input name='Password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                    {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                </Grid>
                <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                    {isSignUp  ? 'Sing Up' : 'Sign In'}
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
   </Container>
  )
}

export default Auth;
