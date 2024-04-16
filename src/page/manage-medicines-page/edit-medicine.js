import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const EditMedicineDialog = ({ open, onClose, info }) => {
  const [editedMedicineInfo, setEditedMedicineInfo] = useState(info);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedMedicineInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editedMedicineInfo);
    onClose(); // Đóng dialog sau khi đã xử lý
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin thuốc</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '400px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tên thuốc"
                  variant="outlined"
                  name="name"
                  value={editedMedicineInfo.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mã số"
                  variant="outlined"
                  name="code"
                  value={editedMedicineInfo.code}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              Ngày sản xuất
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  name="manufactureDate"
                  value={editedMedicineInfo.manufactureDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              Hạn sử dụng
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  name="expiryDate"
                  value={editedMedicineInfo.expiryDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Công dụng"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="uses"
                  value={editedMedicineInfo.uses}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Số lượng"
                  variant="outlined"
                  type="number"
                  name="quantity"
                  value={editedMedicineInfo.quantity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Giá nhập"
                  variant="outlined"
                  type="number"
                  name="importPrice"
                  value={editedMedicineInfo.importPrice}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Giá bán"
                  variant="outlined"
                  type="number"
                  name="price"
                  value={editedMedicineInfo.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nhà cung cấp"
                  variant="outlined"
                  name="supplier"
                  value={editedMedicineInfo.supplier}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Thành phần"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="ingredient"
                  value={editedMedicineInfo.ingredient}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Chỉ định"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="assign"
                  value={editedMedicineInfo.assign}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Chống chỉ định"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="contraindicated"
                  value={editedMedicineInfo.contraindicated}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Lưu</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMedicineDialog;
