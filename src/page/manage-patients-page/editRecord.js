import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import api from "../../api";
import { useSelector } from 'react-redux';

const EditRecordDialog = ({ open, onClose, info, id }) => {
    const [openSnackbar2, setOpenSnackbar2] = useState(false);
    const acc = useSelector(state => {
        if (state.auth.userData) {
            return state.auth.userData;
        }
        return null;
    });
    const [newPatientInfo, setNewPatientInfo] = useState({
        diagnostic: info.diagnostic,
        hospitalizedTime: info.hospitalizedTime,
        leaveTime: info.leaveTime,
        doctorId: acc.userId,
        patientId: info.patientId, // Update this line
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewPatientInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        setNewPatientInfo(prevState => ({
            ...prevState,
            patientId: info.patientId, // Update this line
        }));
    }, [info]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newPatientInfo);
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
                                    value={info.patientId} // Update this line
                                    disabled
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
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">Lưu</Button>
            </DialogActions>
        </Dialog>

    );
};

export default EditRecordDialog;
