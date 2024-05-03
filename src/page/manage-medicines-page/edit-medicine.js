import React, { useState, useEffect } from 'react';
import { Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, Snackbar, Alert, styled, InputLabel, FormControl } from '@mui/material';
import api from "../../api"

const EditMedicineDialog = ({ open, onClose, info }) => {
  const [editedMedicineInfo, setEditedMedicineInfo] = useState(info);
  const [openSnackbar2, setOpenSnackbar2] = useState(false);
  useEffect(() => {
    setEditedMedicineInfo(info);
  }, [info]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedMedicineInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(editedMedicineInfo);
    try {
      const res = await api.put(`medicines/update/${info.id}`, editedMedicineInfo);
      console.log(res);
      // Kiểm tra nếu request thành công
      if (res.status === 200) {
        onClose();
      } else {
        openSnackbar2(true)
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      // setOpenSnackbar2(true)
      console.error("Error:", error);
    }
    // onClose(); // Đóng dialog sau khi đã xử lý
  };

  const CustomInputLabel = styled(InputLabel)(({ theme, isFocused }) => ({
    position: 'absolute',
    backgroundColor: 'white',
    padding: '0 10px',
    color: isFocused ? theme.palette.primary.main : ' rgba(0, 0, 0, 0.6);',
    fontSize: '1rem',
    fontWeight: '400',
  }));

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin thuốc</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '400px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box className="box">
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    label="Tên thuốc*"
                    value={editedMedicineInfo.name}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="box">
                  <FormControl fullWidth margin="normal" >
                    <CustomInputLabel shrink>Loại*</CustomInputLabel>
                    <Select
                      fullWidth
                      id="medicineType"
                      name="medicineType"
                      value={editedMedicineInfo.medicineType}
                      onChange={handleChange}
                    >
                      <MenuItem value="CAPSULE">Viên nang</MenuItem>
                      <MenuItem value="SPRAY">Xịt</MenuItem>
                      <MenuItem value="GRANULE">Hạt</MenuItem>
                      <MenuItem value="LIQUID">Dạng lỏng</MenuItem>
                      <MenuItem value="CREAM">Kem</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="box">
                  <FormControl fullWidth margin="normal" >
                    <CustomInputLabel shrink>Dược tính*</CustomInputLabel>
                    <Select
                      fullWidth
                      id="medicalUseType"
                      name="medicalUseType"
                      value={editedMedicineInfo.medicalUseType}
                      onChange={handleChange}
                    >
                      <MenuItem value="ANALGESICS">Thuốc giảm đau</MenuItem>
                      <MenuItem value="ANTIBIOTICS">Kháng sinh</MenuItem>
                      <MenuItem value="ANTIPYRETICS">Thuốc hạ sốt</MenuItem>
                      <MenuItem value="HORMONES">Hormones</MenuItem>
                      <MenuItem value="SEDATIVES">Thuốc an thần</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="box">
                  <TextField
                    fullWidth
                    id="price"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    label="Giá*"
                    name="price"
                    type='number'
                    value={editedMedicineInfo.price}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="box">
                  <TextField
                    fullWidth
                    id="ingredient"
                    name="ingredient"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    label="Thành phần*"
                    value={editedMedicineInfo.ingredient}
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained" style={{ backgroundColor: '#4d44b5' }}>Lưu</Button>
      </DialogActions>
      <Snackbar
        open={openSnackbar2}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar2(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar2(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Có lỗi xảy ra, vui lòng thử lại!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default EditMedicineDialog;
