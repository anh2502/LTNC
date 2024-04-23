import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import api from "../../api"

const AddRoomDialog = ({ open, onClose }) => {
  const [roomCapacity, setRoomCapacity] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const handleAdd = async() => {
    try {
        const res = await api.post(`rooms`, {roomCapacity,roomNumber});
        console.log(res);
        // Kiểm tra nếu request thành công
        if (res.status === 201) {
            // setOpenSnackbar(true)
        } else {
            // Xử lý trường hợp request không thành công
            // setOpenSnackbar2(true)
        }
    } catch (error) {
        // Xử lý lỗi nếu có
        // setOpenSnackbar2(true)
        // console.error("Error:", error);
    }
    onClose();
    
    // Thực hiện xử lý thêm phòng ở đây
    // onClose(); // Đóng dialog sau khi đã xử lý
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Thêm Phòng</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Capacity"
          fullWidth
          value={roomCapacity}
          onChange={(e) => setRoomCapacity(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Room Number"
          fullWidth
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleAdd}>Thêm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRoomDialog;
