import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, MenuItem, Select, FormControl, InputLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions, styled } from '@mui/material';
import api from "../../api"
import { Email } from '@mui/icons-material';

const CustomInputLabel = styled(InputLabel)(({ theme, isFocused }) => ({
    position: 'absolute',
    backgroundColor: 'white',
    padding: '0 10px',
    color: isFocused ? theme.palette.primary.main : ' rgba(0, 0, 0, 0.6);',
    fontSize: '1rem',
    fontWeight: '400',
}));
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
        const { name, phone, gender, address, dob, type, bhyt } = editedPatientInfo;

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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                    name="name"
                                    value={editedPatientInfo.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Số điện thoại"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    name="phone"
                                    value={editedPatientInfo.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="normal">
                                    <CustomInputLabel shrink>Giới tính</CustomInputLabel>
                                    <Select
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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                    name="address"
                                    value={editedPatientInfo.address}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth margin="normal">
                                    <CustomInputLabel shrink>Kiểu bệnh nhân</CustomInputLabel>
                                    <Select
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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
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
                <Button onClick={handleSubmit} variant="contained" style={{ backgroundColor: '#4d44b5' }}>Lưu</Button>
            </DialogActions>
        </Dialog>

    );
};

export default EditPatientDialog;
