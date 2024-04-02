import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { Box, Grid } from '@mui/material';

const AddPatient = () => {
    const [patientInfo, setPatientInfo] = useState({
        midLastname: '',
        email: '',
        city: '',
        district: '',
        wards: '',
        birthDay: '',
        name: '',
        phoneNumber: '',
        address: '',
        insurance: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPatientInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(patientInfo);
    };

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>

            <TableContainer sx={{ maxHeight: 900, borderRadius: '20px', paddingLeft: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Lato', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin bệnh nhân</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'flex' }} className="medicine-info">
                                    <Grid container my={2}>
                                        <Grid item xs={5}>
                                            <Box className="box">
                                                <label htmlFor="name">Họ và tên đệm*</label>
                                                <input
                                                    type="text"
                                                    id="midLastName"
                                                    name="midLastName"
                                                    value={patientInfo.midLastname}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">

                                                <label htmlFor="email">Email*</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={patientInfo.email}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">

                                                <Grid container my={3} sx={{ marginTop: '0' }}>
                                                    <Grid item xs={3.6}>
                                                        <label htmlFor="city">Tỉnh/Thành phố*</label>
                                                        <input
                                                            type="text"
                                                            id="city"
                                                            name="city"
                                                            value={patientInfo.city}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.6} sx={{ margin: '0 auto' }}>

                                                        <label htmlFor="district">Quận/Huyện*</label>
                                                        <input
                                                            type="text"
                                                            id="district"
                                                            name="district"
                                                            value={patientInfo.district}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.6}>

                                                        <label htmlFor="wards">Phường/Xã*</label>
                                                        <input
                                                            type="text"
                                                            id="wards"
                                                            name="wards"
                                                            value={patientInfo.wards}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="birthDay">Ngày sinh*</label>
                                                <input
                                                    type="date"
                                                    id="birthDay"
                                                    name="birthDay"
                                                    value={patientInfo.birthDay}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={5} sx={{ marginLeft: '10%' }}>
                                            <Box className="box">

                                                <label htmlFor="name">Tên*</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={patientInfo.name}
                                                    onChange={handleChange}
                                                />
                                            </Box>

                                            <Box className="box">

                                                <label htmlFor="phoneNumber">Số điện thoại*</label>
                                                <input
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={patientInfo.phoneNumber}
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
                                                    id="insurance"
                                                    name="insurance"
                                                    value={patientInfo.insurance}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className='summitFooter'>

                                    <button type="submit">Lưu nháp</button>
                                    <button type="submit">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default AddPatient;