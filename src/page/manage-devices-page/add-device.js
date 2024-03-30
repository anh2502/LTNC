import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

const AddDevice = () => {
    const [deviceInfo, setDeviceInfo] = useState({
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
        setDeviceInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(deviceInfo);
    };

    return (
        <TableContainer sx={{ maxHeight: 800, borderRadius: '20px', paddingLeft: '20px', overflowY: 'hidden' }}>
            <Table stickyHeader aria-label="sticky table" >
                <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                    <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Poppins', lineHeight: '36px' }}>Thông tin thiết bị</TableCell>
                </TableHead>
                <TableBody >
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '20' }} className="add-medicine">
                        <form onSubmit={handleSubmit}>
                            <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }} className="medicine-info">
                                <div className='leftTeam'>
                                    <label htmlFor="name">Tên thiết bị:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={deviceInfo.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='rightTeam'>

                                    <div><label htmlFor="code">Mã số:</label></div>
                                    <input
                                        type="text"
                                        id="code"
                                        name="code"
                                        value={deviceInfo.code}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='leftTeam'>

                                    <label htmlFor="manufactureDate">Ngày sản xuất:</label>
                                    <input
                                        type="date"
                                        id="manufactureDate"
                                        name="manufactureDate"
                                        value={deviceInfo.manufactureDate}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className='rightTeam'>

                                    <div><label htmlFor="expiryDate">Hạn sử dụng:</label></div>
                                    <input
                                        type="date"
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={deviceInfo.expiryDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='leftTeam'>


                                    <label htmlFor="uses">Công dụng:</label>
                                    <textarea
                                        id="uses"
                                        name="uses"
                                        value={deviceInfo.uses}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className='rightTeam'>

                                    <div><label htmlFor="image">Hình ảnh:</label></div>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='leftTeam'>

                                    <label htmlFor="quantity">Số lượng:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={deviceInfo.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='rightTeam'>

                                    <div><label htmlFor="supplier">Nhà cung cấp:</label></div>
                                    <input
                                        type="text"
                                        id="supplier"
                                        name="supplier"
                                        value={deviceInfo.supplier}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='rightTeam'>

                                <button type="submit">Lưu nháp</button>
                                <button type="submit">Gửi</button>
                            </div>
                        </form>
                    </div>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AddDevice;