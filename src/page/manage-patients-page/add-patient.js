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
        hospitalizedDay: '',
        hospitalNumber: '',
        doctor: '',
        reason: '',
        self: '',
        family: '',
        body: '',
        agencies: '',
        diseaseSummary: '',
        mainDisease: '',
        includingDiseases: '',
        prognosis: '',
        pathologicalProcess: '',
        treatmentDirection: '',
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
                                                <label htmlFor="name">Họ và tên đệm*</label>
                                                <input
                                                    type="text"
                                                    id="midLastname"
                                                    name="midLastname"
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
                                                    type="number"
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
                                <div className='benhan'>
                                    <h1 className='benhan-title'>Bệnh án</h1>
                                </div>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'flex' }} className="medicine-info">
                                    <Grid container my={2}>
                                        <Grid item xs={5}>
                                            <Box className="box">
                                                <label htmlFor="hospitalizedDay">Ngày nhập viện*</label>
                                                <input
                                                    type="date"
                                                    id="hospitalizedDay"
                                                    name="hospitalizedDay"
                                                    value={patientInfo.hospitalizedDay}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="hospitalNumber">Phòng bệnh số*</label>
                                                <input
                                                    type="number"
                                                    id="hospitalNumber"
                                                    name="hospitalNumber"
                                                    value={patientInfo.hospitalNumber}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="doctor">Bác sĩ điều trị*</label>
                                                <input
                                                    type="text"
                                                    id="doctor"
                                                    name="doctor"
                                                    value={patientInfo.doctor}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <label htmlFor="reason">Lý do nằm viện*</label>
                                                <textarea
                                                    id="reason"
                                                    name="reason"
                                                    value={patientInfo.reason}
                                                    onChange={handleChange}
                                                />

                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="self">Tiền sử bệnh*</label>
                                                <Grid container my={2} sx={{ marginTop: '0', justifyContent: 'space-between' }}>
                                                    <Grid item xs={5}>
                                                        <label htmlFor="self">Bản thân</label>
                                                        <input
                                                            type="text"
                                                            id="self"
                                                            name="self"
                                                            value={patientInfo.self}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={5}>

                                                        <label htmlFor="family">Gia đình</label>
                                                        <input
                                                            type="text"
                                                            id="family"
                                                            name="family"
                                                            value={patientInfo.family}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                        </Grid>
                                        <Grid item xs={5} sx={{ marginLeft: '10%' }}>
                                            <Box className="box">
                                                <label htmlFor="body">Khám bệnh*</label>
                                                <Grid container my={3} sx={{ marginTop: '0', justifyContent: 'space-between' }}>
                                                    <Grid item xs={3.75}>
                                                        <label htmlFor="body">Toàn thân</label>
                                                        <input
                                                            type="text"
                                                            id="body"
                                                            name="body"
                                                            value={patientInfo.body}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.75}>
                                                        <label htmlFor="agencies">Các cơ quan</label>
                                                        <input
                                                            type="text"
                                                            id="agencies"
                                                            name="agencies"
                                                            value={patientInfo.agencies}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.75}>

                                                        <label htmlFor="diseaseSummary">Tóm tắt bệnh</label>
                                                        <input
                                                            type="text"
                                                            id="diseaseSummary"
                                                            name="diseaseSummary"
                                                            value={patientInfo.diseaseSummary}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box className="box">
                                                <label htmlFor="mainDisease">Chẩn đoán*</label>
                                                <Grid container my={3} sx={{ marginTop: '0', justifyContent: 'space-between' }}>
                                                    <Grid item xs={3.75}>
                                                        <label htmlFor="mainDisease">Bệnh chính</label>
                                                        <input
                                                            type="text"
                                                            id="mainDisease"
                                                            name="mainDisease"
                                                            value={patientInfo.mainDisease}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.75}>
                                                        <label htmlFor="includingDiseases">Bệnh kèm theo</label>
                                                        <input
                                                            type="text"
                                                            id="includingDiseases"
                                                            name="includingDiseases"
                                                            value={patientInfo.includingDiseases}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3.75}>

                                                        <label htmlFor="prognosis">Tiên lượng</label>
                                                        <input
                                                            type="text"
                                                            id="prognosis"
                                                            name="prognosis"
                                                            value={patientInfo.prognosis}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box className='box'>
                                                <label htmlFor="pathologicalProcess">Quá trình bệnh lý</label>
                                                <textarea
                                                    id="pathologicalProcess"
                                                    name="pathologicalProcess"
                                                    value={patientInfo.pathologicalProcess}
                                                    onChange={handleChange}
                                                />

                                            </Box>
                                            <Box className="box" sx={{ marginTop: 3 }}>

                                                <div><label htmlFor="treatmentDirection">Hướng điều trị</label></div>
                                                <input
                                                    type="text"
                                                    id="treatmentDirection"
                                                    name="treatmentDirection"
                                                    value={patientInfo.treatmentDirection}
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