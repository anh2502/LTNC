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

const AddPatientDialog = ({ open, onClose, roomId }) => {
  const [patientId, setPatientId] = useState('');
  const [bedNumber, setBedNumber] = useState('');

  const handleAdd = async() => {
    try {
        const res = await api.post(`rooms/${roomId}/patients/${patientId}?bedNumber=${bedNumber}`);
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
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Patient</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Patient ID"
          fullWidth
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Bed Number"
          fullWidth
          value={bedNumber}
          onChange={(e) => setBedNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPatientDialog;
