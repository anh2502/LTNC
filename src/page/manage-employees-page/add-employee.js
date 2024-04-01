import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const AddEmployee = () => {
    const [employeeInfo, setEmployeeInfo] = useState({
        midLastName: '',
        name: '',
        email: '',
        birthDay: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(employeeInfo);
    };

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>

            <TableContainer sx={{ maxHeight: 900, borderRadius: '20px', paddingLeft: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Lato', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin nhân viên</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'inline-block' }} className="medicine-info">
                                    <div className='leftTeam'>
                                        <label htmlFor="midLastName">Họ và tên đệm*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            midLastName="midLastName"
                                            value={employeeInfo.midLastName}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="text"
                                            id="email"
                                            email="email"
                                            value={employeeInfo.email}
                                            onChange={handleChange}
                                        />

                                        <label htmlFor="birthDay">Ngày sinh*</label>
                                        <input
                                            type="date"
                                            id="birthDay"
                                            name="birthDay"
                                            value={employeeInfo.birthDay}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='rightTeam'>

                                        <div><label htmlFor="name">Tên*</label></div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={employeeInfo.name}
                                            onChange={handleChange}
                                        />

                                        <div><label htmlFor="phoneNumber">Số điện thoại*</label></div>
                                        <input
                                            type="number"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={employeeInfo.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        <div><label htmlFor="address">Nhập địa chỉ*</label></div>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={employeeInfo.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '51%' }}>
                                    <FormControl>
                                        <FormLabel>Bạn có phải là người máy không?</FormLabel>
                                        <RadioGroup>
                                            <FormControlLabel
                                                value='yes'
                                                control={<Radio />}
                                                label='Chuẩn cmnr=)))' />
                                        </RadioGroup>
                                    </FormControl>
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

export default AddEmployee;