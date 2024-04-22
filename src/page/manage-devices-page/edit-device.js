import React, { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  TextareaAutosize,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const EditDeviceDialog = ({ open, onClose, deviceInfo1 }) => {
  const [deviceInfo, setDeviceInfo] = useState({
    name: '',
    code: '',
    manufactureDate: '',
    expiryDate: '',
    uses: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDeviceInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    onClose(); // Đóng dialog sau khi đã xử lý
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin thiết bị</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '70%' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tên thiết bị"
                  variant="outlined"
                  name="name"
                  value={deviceInfo.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mã số"
                  variant="outlined"
                  name="code"
                  value={deviceInfo.code}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  fullWidth
                  minRows={5}
                  placeholder="Hướng dẫn sử dụng"
                  name="uses"
                  value={deviceInfo.uses}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                {/* Input cho hình ảnh */}
                <input
                  type="file"
                  accept="image/*" // Chỉ chấp nhận các loại file hình ảnh
                  name="image"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                Hạn sử dụng
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  name="expiryDate"
                  value={deviceInfo.expiryDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                Thời hạn bảo trì
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  name="manufactureDate"
                  value={deviceInfo.manufactureDate}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained" style={{ backgroundColor: '#4d44b5' }}>Lưu</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDeviceDialog;
