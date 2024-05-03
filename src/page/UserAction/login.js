import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, styled, makeStyles } from '@mui/material';
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


  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" color={"#303972"}>Hospital</Typography>
        <form style={{ marginTop: '20px', width: '100%', color: '#303972' }}>
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
          <div style={{ marginTop: '15px', fontWeight: '300' }}>
            <LinkAdd to="/signin">Đăng kí tài khoản</LinkAdd>
          </div>
        </form>
      </div >
    </Container >
  );
};

export default Login;
