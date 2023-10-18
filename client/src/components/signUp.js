import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import "react-phone-input-2/lib/style.css";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState  } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import { register } from '../redux/actions/actions';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.


 function SignUp() {
  const defaultTheme = createTheme();
const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [PhoneNumber, setPhone] = useState("");
 const dispatch=useDispatch()
 const navigate=useNavigate()
//  const handleLogin=()=>{
//    dispatch(login({email,password},navigate))

 const handleregister=()=>{
  console.log({FirstName,LastName,PhoneNumber,email:Email,password:Password})
   dispatch(register({FirstName:FirstName,LastName:LastName,PhoneNumber:PhoneNumber,email:Email,password:Password,Role:"user"},navigate))
 }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });

   
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box   sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>setFirstName(e.target.value)}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  
                  autoComplete="email"
                  
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
         
              <Grid item xs={12}>
              <PhoneInput
          country={"tn"}
          label="Phone Number"
          
          onChange={(PhoneNumber) => setPhone(PhoneNumber)}
        />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleregister}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignUp