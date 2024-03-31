import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { Box, Grid } from '@mui/material';

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
        <div style={{ width: '95%', margin: '0 auto' }}>

            <TableContainer sx={{ maxHeight: 900, borderRadius: '20px', paddingLeft: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Poppins', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin thiết bị</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', display: 'inline-block' }} className="medicine-info">
                                    <div className='leftTeam'>
                                        <label htmlFor="name">Tên thiết bị*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={deviceInfo.name}
                                            onChange={handleChange}
                                            dir="abd"
                                        />
                                        <label htmlFor="uses" >Hướng dẫn sử dụng*</label>
                                        <textarea
                                            id="uses"
                                            name="uses"
                                            value={deviceInfo.uses}
                                            onChange={handleChange}
                                            style={{ minHeight: '300px' }}
                                        />
                                    </div>
                                    <div className='rightTeam'>

                                        <div className='topTeam'>
                                            <div><label htmlFor="code">Mã số*</label></div>
                                            <input
                                                type="text"
                                                id="code"
                                                name="code"
                                                value={deviceInfo.code}
                                                onChange={handleChange}
                                                style={{ marginBottom: '9px' }}
                                            />
                                        </div>
                                        <Grid container my={2}>
                                            <Grid item className='leftRightTeam' xs={4}>
                                                <Box>
                                                    <div><label htmlFor="image">Hình ảnh*</label></div>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        accept="image/*"
                                                        onChange={handleChange}
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid item className='rightRightTeam' xs={8}>
                                                <Box>
                                                    <div><label htmlFor="expiryDate">Thời hạn bảo trì (năm/lần)*</label></div>
                                                    <input
                                                        type="date"
                                                        id="expiryDate"
                                                        name="expiryDate"
                                                        value={deviceInfo.expiryDate}
                                                        onChange={handleChange}
                                                        style={{ width: '100%' }}
                                                    />
                                                </Box>
                                                <Box>
                                                    <div><label htmlFor="expiryDate">Hạn sử dụng (năm,...)*</label></div>
                                                    <input
                                                        type="date"
                                                        id="expiryDate"
                                                        name="expiryDate"
                                                        value={deviceInfo.expiryDate}
                                                        onChange={handleChange}
                                                        style={{ width: '100%' }}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
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

export default AddDevice;