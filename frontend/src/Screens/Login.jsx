import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ABI from './ABI.json';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({
//       email,
//       password,
//     });
//   };

const Login = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    initWeb3();
  }, []);

  const initWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        setWeb3(web3);

        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error('User denied access to accounts.');
      }
    } else {
      console.error('Web3 not found. Install MetaMask or use an Ethereum-enabled browser.');
    }
  };

  useEffect(() => {
    if (web3) {
      initContract();
    }
  }, [web3]);

  const initContract = () => {
    const contractABI = ABI;
    const contractAddress = '0x8f36c9F0a2374a9E2f41f3F5589e16f4c27633e5'; 
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    setContract(contract);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!contract || !uid || !password) {
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      const userId = await contract.methods.loginUser(1, password).call({ from: accounts[0]});

      if (userId > 0) {
        alert('Login successful. User ID: ' + userId);
      } else {
        alert('Login failed. Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed.');
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" style={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} p={5} pt={10} component={Paper} elevation={6} square>
          <Box
            style={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar style={{ m: 1, bgcolor: 'secondary.main' }} variant="rounded">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={handleSubmit} style={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Number"
                label="Enter your uid"
                name="uid"
                autoFocus
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                labelPlacement="end"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary" // or color="secondary"
                style={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
