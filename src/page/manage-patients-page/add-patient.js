import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { Box, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';
import api from "../../api";
import axios from 'axios'; // Import axios for making HTTP requests

const AddPatient = () => {
    const [patientInfo, setPatientInfo] = useState({
        name: '',
        phone: '',
        gender: '',
        address: '',
        dob: '',
        type: '',
        bhyt: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openSnackbar2, setOpenSnackbar2] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPatientInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/patients/create-patient', patientInfo);
            console.log(response); // Log response data
            if (response.status === 201) {
                setOpenSnackbar(true)
            } else {
                // Xử lý trường hợp request không thành công
                setOpenSnackbar2(true)
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            setOpenSnackbar2(true)
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>
            <TableContainer sx={{ minHeight: 900, borderRadius: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Lato', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin bệnh nhân</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'flex' }} className="medicine-info">
                                    <Grid container my={2}>
                                        <Grid item xs={5}>
                                            <Box className="box">
                                                <label htmlFor="name">Họ và tên*</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={patientInfo.name}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="birthDay">Ngày sinh*</label>
                                                <input
                                                    type="date"
                                                    id="dob"
                                                    name="dob"
                                                    value={patientInfo.dob}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">
                                                <Grid container my={3} sx={{ marginTop: '0' }}>

                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel>Chọn Giới tính</InputLabel>
                                                        <Select
                                                            label="Giới tính"
                                                            name="gender"
                                                            value={patientInfo.gender}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value="">Chọn giới tính</MenuItem>
                                                            <MenuItem value="male">Nam</MenuItem>
                                                            <MenuItem value="female">Nữ</MenuItem>
                                                            <MenuItem value="other">Khác</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Box>
                                            <Box className="box">
                                                <Grid container my={3} sx={{ marginTop: '0' }}>

                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel>Kiểu bệnh nhân</InputLabel>
                                                        <Select
                                                            label="Kiểu bệnh nhân"
                                                            name="type"
                                                            value={patientInfo.type}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value="INPATIENT">Nhập viện</MenuItem>
                                                            <MenuItem value="OUTPATIENT">Khám bệnh</MenuItem>
                                                            <MenuItem value="other">Khác</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Box>

                                        </Grid>
                                        <Grid item xs={5} sx={{ marginLeft: '10%' }}>


                                            <Box className="box">

                                                <label htmlFor="phoneNumber">Số điện thoại*</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    value={patientInfo.phone}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">

                                                <div><label htmlFor="address">Nhập địa chỉ*</label></div>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    value={patientInfo.address}
                                                    onChange={handleChange}
                                                />

                                            </Box>
                                            <Box className="box" sx={{ marginTop: 3 }}>

                                                <div><label htmlFor="insurance">Mã số BHYT*</label></div>
                                                <input
                                                    type="text"
                                                    id="bhyt"
                                                    name="bhyt"
                                                    value={patientInfo.bhyt}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className='summitFooter'>
                                    <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                                        <Button className="xinnghi" style={{ textTransform: 'none', fontWeight: '700', fontSize: '18px' }} >Hủy</Button>
                                    </div>
                                    <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                                        <Button onClick={handleSubmit} className="xinnghi" style={{ backgroundColor: "#4d44b5", color: 'white', textTransform: 'none', fontWeight: '700', fontSize: '18px' }} >Gửi</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Thêm thành công!
                </Alert>
            </Snackbar>
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
        </div >
    );
};

export default AddPatient;