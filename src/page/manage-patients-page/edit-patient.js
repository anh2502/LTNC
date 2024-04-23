import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, MenuItem, Select, FormControl, InputLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import api from "../../api"
import { Email } from '@mui/icons-material';

const EditPatientDialog = ({ open, onClose, info }) => {
    const [editedPatientInfo, setEditedPatientInfo] = useState(info);
    const [openSnackbar2, setOpenSnackbar2] = useState(false);

    useEffect(() => {
        setEditedPatientInfo(info);
    }, [info]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedPatientInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        console.log(editedPatientInfo);
        const { name, phone, gender, address, type, dob, bhyt } = editedPatientInfo;

        const newPatientInfo = {
            name: name,
            phone: phone,
            gender: gender,
            address: address,
            type: type,
            dob: dob,
            bhyt: bhyt
        };
        console.log(newPatientInfo);
        try {
            const request = await api.patch(`patients/${info.patientId}`, newPatientInfo);
            console.log(request);
            if (request.status === 200) {
                onClose();
            } else {
                openSnackbar2(true);
            }
        } catch (error) {
            console.error("Error:", error);
           
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Chỉnh sửa thông tin bệnh nhân</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Họ và tên"
                                    variant="outlined"
                                    name="name"
                                    value={editedPatientInfo.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Số điện thoại"
                                    variant="outlined"
                                    name="phone"
                                    value={editedPatientInfo.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Chọn Giới tính</InputLabel>
                                    <Select
                                        label="Giới tính"
                                        name="gender"
                                        value={editedPatientInfo.gender}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">Chọn giới tính</MenuItem>
                                        <MenuItem value="male">Nam</MenuItem>
                                        <MenuItem value="female">Nữ</MenuItem>
                                        <MenuItem value="other">Khác</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    label="Ngày sinh"
                                    name="dob"
                                    value={editedPatientInfo.dob}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Địa chỉ"
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                    name="address"
                                    value={editedPatientInfo.address}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Kiểu bệnh nhân</InputLabel>
                                    <Select
                                        label="Kiểu bệnh nhân"
                                        name="type"
                                        value={editedPatientInfo.type}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="INPATIENT">Nhập viện</MenuItem>
                                        <MenuItem value="OUTPATIENT">Khám bệnh</MenuItem>
                                        <MenuItem value="other">Khác</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mã số BHYT"
                                    variant="outlined"
                                    name="bhyt"
                                    value={editedPatientInfo.bhyt}
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

export default EditPatientDialog;
