import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

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
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'inline-block' }} className="medicine-info">
                                    <div className='leftTeam'>
                                        <label htmlFor="name">Họ và tên đệm*</label>
                                        <input
                                            type="text"
                                            id="midLastName"
                                            name="midLastName"
                                            value={patientInfo.midLastname}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={patientInfo.email}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="city">Tỉnh/Thành phố*</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={patientInfo.city}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="district">Quận/Huyện*</label>
                                        <input
                                            type="text"
                                            id="district"
                                            name="district"
                                            value={patientInfo.district}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="wards">Phường/Xã*</label>
                                        <input
                                            type="text"
                                            id="wards"
                                            name="wards"
                                            value={patientInfo.wards}
                                            onChange={handleChange}
                                        />

                                        <label htmlFor="birthDay">Ngày sinh*</label>
                                        <input
                                            type="date"
                                            id="birthDay"
                                            name="birthDay"
                                            value={patientInfo.birthDay}
                                            onChange={handleChange}
                                        />



                                        <label htmlFor="name">Tên*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={patientInfo.name}
                                            onChange={handleChange}
                                        />


                                        <label htmlFor="phoneNumber">Số điện thoại*</label>
                                        <input
                                            type="number"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={patientInfo.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='rightTeam'>

                                        <div><label htmlFor="address">Nhập địa chỉ*</label></div>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={patientInfo.address}
                                            onChange={handleChange}
                                        />

                                        <div><label htmlFor="insurance">Mã số BHYT*</label></div>
                                        <input
                                            type="text"
                                            id="insurance"
                                            name="insurance"
                                            value={patientInfo.insurance}
                                            onChange={handleChange}
                                        />
                                    </div>
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
        </div>
    );
};

export default AddPatient;