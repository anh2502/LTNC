import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, MenuItem, Select, FormControl, InputLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import api from "../../api"
import { Email } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const AddRecordDialog = ({ open, onClose, info }) => {
    const [openSnackbar2, setOpenSnackbar2] = useState(false);
    const acc = useSelector(state => {
        if (state.auth.userData) {
          return state.auth.userData;
        }
        return null; // hoặc giá trị mặc định phù hợp với ứng dụng của bạn
      });
      const [newPatientInfo, setNewPatientInfo] = useState({
        diagnostic: "",
        hospitalizedTime: "",
        leaveTime: "",
        doctorId: acc.userId,
        patientId: info,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewPatientInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    useEffect(() => {
        setNewPatientInfo((prevState) => ({
            ...prevState,
            patientId: info,
        }));
    }, [info]);
    
    const handleSubmit = async (event) => {       
        console.log(newPatientInfo);
        console.log(info)
        try {
            const request = await api.post(`medicalRecords/create-record`, newPatientInfo);
            console.log(request);
            if (request.status === 200) {
                onClose();
            } else {
                setOpenSnackbar2(true);
            }
        } catch (error) {
            console.error("Error:", error);
           
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thêm bệnh án</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '400px', marginTop: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            Mã bệnh nhân
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    name="patientId"
                                    value={info}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            Chẩn đoán
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    name="diagnostic"
                                    value={newPatientInfo.diagnostic}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Ngày nhập viện
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    // label="Ngày sinh"
                                    name="hospitalizedTime"
                                    value={newPatientInfo.hospitalizedTime}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Ngày xuất viện
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    // label="Ngày sinh"
                                    name="leaveTime"
                                    value={newPatientInfo.leaveTime}
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

export default AddRecordDialog;
