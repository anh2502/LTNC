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
  styled,
  InputLabel,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,

});

const CustomInputLabel = styled(InputLabel)(({ theme, isFocused }) => ({
  position: 'absolute',
  backgroundColor: 'white',
  marginLeft: '7px',
  marginTop: '-7px',
  padding: '0 10px',
  color: isFocused ? theme.palette.primary.main : ' rgba(0, 0, 0, 0.6);',
  fontSize: '1rem',
  fontWeight: '400',
}));
const EditDeviceDialog = ({ open, onClose, deviceInfo1 }) => {
  const [isFocused, setIsFocused] = React.useState(false);
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="outlined"
                  name="code"
                  value={deviceInfo.code}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInputLabel shrink>Hướng dẫn sử dụng</CustomInputLabel>
                <TextareaAutosize
                  fullWidth
                  style={{
                    width: '100%',
                  }}
                  minRows={5}
                  onFocus={() => setIsFocused(true)}
                  onClose={() => setIsFocused(false)}
                  name="uses"
                  value={deviceInfo.uses}
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Hạn sử dụng"
                  margin="normal"
                  name="expiryDate"
                  value={deviceInfo.expiryDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  label="Thời hạn bảo trì"
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
