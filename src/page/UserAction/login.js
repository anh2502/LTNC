import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">Hospital</Typography>
        <form style={{ marginTop: '20px', width: '100%' }}>
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
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Đăng nhập
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
