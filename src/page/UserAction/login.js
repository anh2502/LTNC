import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Paper, Box, styled, makeStyles } from '@mui/material';
import { Navigate } from 'react-router-dom';
import api from "../../api";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions';
import { Link } from "react-router-dom";

const LinkAdd = styled(Link)(
  ({ active }) => ({
    color: 'blue',
  })
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  // dency array ensures this effect runs only once on component mount

  const handleLogin = async () => {
    try { 
      const response = await api.post('accounts/login', { username : username?username: localStorage.getItem("username"), password:password? password: localStorage.getItem("password") });
      if (response && response.data.data.accessToken) {
        if (!localStorage.getItem('token')) {
          localStorage.setItem("token", response.data.data.accessToken);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        }
        const userData = response.data.data;
        dispatch(loginSuccess(userData));
        return <Navigate to="/LTNC-BTL" />;
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Tên đăng nhập hoặc mật khẩu không đúng.');
      } else {
        setErrorMessage('Đã xảy ra lỗi, vui lòng thử lại sau.');
      }
      console.error('Error logging in:', error);
    }
  };
 
  if (!localStorage.getItem('token'))return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, backgroundColor: '#fff' }}>
          <Typography variant="h4" color="primary" gutterBottom sx={{textAlign: "center"}}>Hospital</Typography>
          <Box component="form" sx={{ mt: 3, width: '100%' }}>
            <TextField
              label="Tên đăng nhập"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Mật khẩu"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <Typography variant="body1" color="error" sx={{ mt: 1 }}>
                {errorMessage}
              </Typography>
            )}
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
              Đăng nhập
            </Button>
            {/* <Box sx={{ mt: 2, fontWeight: '300', textAlign: 'center' }}>
              <Link href="/signin" variant="body2">
                Đăng kí tài khoản
              </Link>
            </Box> */}
          </Box>
        </Paper>
      </Box>
    </Container>
  ); else {handleLogin()}
};

export default Login;
