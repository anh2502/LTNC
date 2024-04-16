import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const DeleteConfirmationDialog = ({ open, onClose, id, api }) => {
  const handleDelete = () => {
    // onDelete(id); // Gọi hàm onDelete với id của mục cần xóa
    onClose(); // Đóng dialog sau khi xác nhận xóa
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Xác nhận xóa</DialogTitle>
      <DialogContent>
        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleDelete} variant="contained" color="primary">Xóa</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
