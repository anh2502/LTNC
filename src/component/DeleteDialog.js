import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import api from "../api"

const DeleteConfirmationDialog = ({ open, onClose, apiURL }) => {
  const handleDelete = async() => {
    console.log(apiURL)
    // onClose(); // Đóng dialog sau khi xác nhận xóa
    try {
      // Gọi API để xóa dữ liệu
      const response = await api.delete(apiURL); // Thay đổi endpoint và id tương ứng với ứng dụng của bạn
      onClose();
  } catch (error) {
      console.error('Error deleting data:', error);
      onClose();
  }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Xác nhận xóa</DialogTitle>
      <DialogContent>
        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleDelete} variant="contained" style={{ backgroundColor: '#4d44b5'}}>Xóa</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
