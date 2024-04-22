import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const EditEmployeeDialog = ({ open, onClose, info }) => {
  const [editedEmployeeInfo, setEditedEmployeeInfo] = useState(info);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployeeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editedEmployeeInfo);
    onClose(); // Đóng dialog sau khi đã xử lý
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin nhân viên</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '400px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Họ và tên đệm"
                  variant="outlined"
                  name="midLastName"
                  value={editedEmployeeInfo.midLastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tên"
                  variant="outlined"
                  name="name"
                  value={editedEmployeeInfo.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={editedEmployeeInfo.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Ngày sinh"
                  variant="outlined"
                  type="date"
                  name="birthDay"
                  value={editedEmployeeInfo.birthDay}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  variant="outlined"
                  name="phoneNumber"
                  value={editedEmployeeInfo.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Địa chỉ"
                  variant="outlined"
                  name="address"
                  value={editedEmployeeInfo.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Chức vụ"
                  variant="outlined"
                  name="position"
                  value={editedEmployeeInfo.position}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phòng ban"
                  variant="outlined"
                  name="department"
                  value={editedEmployeeInfo.department}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bằng cấp"
                  variant="outlined"
                  name="degree"
                  value={editedEmployeeInfo.degree}
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

export default EditEmployeeDialog;
