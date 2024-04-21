import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';
import { Navigate } from 'react-router-dom';
import api from "../../api";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // Xử lý logic đăng nhập ở đây
    try {
      const response = await api.post('accounts/login', { username, password });
      console.log(response)
      const userData = response.data.data;
      dispatch(loginSuccess(userData));
      return <Navigate to="/LTNC-BTL" />;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  const handleSignin = async () => {
    // Xử lý logic đăng nhập ở đây
    try {
      const response = await api.post('accounts/create-employee', { username, password });
      console.log(response)
      const userData = response.data.data;
      dispatch(loginSuccess(userData));
      return <Navigate to="/LTNC-BTL" />;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">Hospital</Typography>
        <form style={{ marginTop: '20px', width: '100%' }}>
          Tên đăng nhập
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          Mật khẩu
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Đăng nhập
          </Button>
          <Button variant="contained" color="primary" fullWidth onClick={handleSignin} style={{ marginTop: '20px' }}>
            Đăng kí
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
