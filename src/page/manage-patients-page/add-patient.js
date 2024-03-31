import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

const AddPatient = () => {
    const [patientInfo, setPatientInfo] = useState({
        name: '',
        code: '',
        manufactureDate: '',
        expiryDate: '',
        uses: '',
        image: '',
        quantity: '',
        supplier: '',
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
        <div style={{ height: '100%', width: '95%', margin: '0 auto' }}>

            <TableContainer sx={{ maxHeight: 900, borderRadius: '20px', paddingLeft: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Poppins', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin bệnh nhân</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', display: 'inline-block' }} className="medicine-info">
                                    <div className='leftTeam'>
                                        <label htmlFor="name">Tên bệnh nhân:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={patientInfo.name}
                                            onChange={handleChange}
                                            dir="abd"
                                        />

                                        <label htmlFor="manufactureDate">Ngày sản xuất:</label>
                                        <input
                                            type="date"
                                            id="manufactureDate"
                                            name="manufactureDate"
                                            value={patientInfo.manufactureDate}
                                            onChange={handleChange}
                                        />



                                        <label htmlFor="uses">Công dụng:</label>
                                        <textarea
                                            id="uses"
                                            name="uses"
                                            value={patientInfo.uses}
                                            onChange={handleChange}
                                        />


                                        <label htmlFor="quantity">Số lượng:</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            value={patientInfo.quantity}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='rightTeam'>

                                        <div><label htmlFor="code">Mã số:</label></div>
                                        <input
                                            type="text"
                                            id="code"
                                            name="code"
                                            value={patientInfo.code}
                                            onChange={handleChange}
                                        />

                                        <div><label htmlFor="expiryDate">Hạn sử dụng:</label></div>
                                        <input
                                            type="date"
                                            id="expiryDate"
                                            name="expiryDate"
                                            value={patientInfo.expiryDate}
                                            onChange={handleChange}
                                        />

                                        <div><label htmlFor="image">Hình ảnh:</label></div>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleChange}
                                        />


                                        <div><label htmlFor="supplier">Nhà cung cấp:</label></div>
                                        <input
                                            type="text"
                                            id="supplier"
                                            name="supplier"
                                            value={patientInfo.supplier}
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