import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { Box, Grid } from '@mui/material';

const AddMedicine = () => {
    const [medicineInfo, setMedicineInfo] = useState({
        name: '',
        code: '',
        manufactureDate: '',
        expiryDate: '',
        uses: '',
        image: '',
        quantity: '',
        supplier: '',
        importPrice: '',
        price: '',
        ingredient: '',
        assign: '',
        contraindicated: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMedicineInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(medicineInfo);
    };

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>

            <TableContainer sx={{ minHeight: 900, borderRadius: '20px', paddingLeft: '20px', overflow: 'hidden', marginTop: '30px' }}>
                <Table >
                    <TableHead sx={{ borderRadius: '20px', paddingLeft: '20px' }}>
                        <TableCell style={{ backgroundColor: '#4D44B5', borderRadius: '20px 0px 0px', color: 'white', fontSize: '24px', fontWeight: '700', fontFamily: 'Lato', lineHeight: '36px', paddingLeft: '4%' }}>Thông tin thuốc</TableCell>
                    </TableHead>
                    <TableBody >
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '0px 0px 20px 20px' }} className="add-medicine">
                            <form onSubmit={handleSubmit} className='formSumit'>
                                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Lato', fontWeight: '600', display: 'flex' }} className="medicine-info">
                                    <Grid container my={2}>
                                        <Grid item xs={5}>
                                            <Box className='box medicine'>

                                                <label htmlFor="name">Tên thuốc*</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={medicineInfo.name}
                                                    onChange={handleChange}
                                                    dir="abd"
                                                />
                                            </Box>
                                            <Box className='box medicine'>

                                                <label htmlFor="manufactureDate">Ngày sản xuất*</label>
                                                <input
                                                    type="date"
                                                    id="manufactureDate"
                                                    name="manufactureDate"
                                                    value={medicineInfo.manufactureDate}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <label htmlFor="uses">Công dụng*</label>
                                                <textarea
                                                    id="uses"
                                                    name="uses"
                                                    value={medicineInfo.uses}
                                                    onChange={handleChange}
                                                />

                                            </Box>
                                            <Box className='box'>
                                                <label htmlFor="quantity">Số lượng*</label>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                    name="quantity"
                                                    value={medicineInfo.quantity}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <Grid container my={2} justifyContent={'space-between'} margin={0}>
                                                    <Grid item xs={5}>
                                                        <Box >
                                                            <label htmlFor="importPrice">Giá nhập*</label>
                                                            <input
                                                                type="number"
                                                                id="importPrice"
                                                                name="importPrice"
                                                                value={medicineInfo.importPrice}
                                                                onChange={handleChange}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Box >
                                                            <label htmlFor="price">Giá bán*</label>
                                                            <input
                                                                type="number"
                                                                id="price"
                                                                name="price"
                                                                value={medicineInfo.price}
                                                                onChange={handleChange}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box className='box'>
                                                <label htmlFor="assign">Chỉ định*</label>
                                                <textarea
                                                    id="assign"
                                                    name="assign"
                                                    value={medicineInfo.assign}
                                                    onChange={handleChange}
                                                />

                                            </Box>
                                        </Grid>
                                        <Grid item xs={5} sx={{ marginLeft: '10%' }}>
                                            <Box className='box medicine'>

                                                <div><label htmlFor="code">Mã số*</label></div>
                                                <input
                                                    type="text"
                                                    id="code"
                                                    name="code"
                                                    value={medicineInfo.code}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box medicine' sx={{ paddingBottom: 0 }}>

                                                <div><label htmlFor="expiryDate">Hạn sử dụng*</label></div>
                                                <input
                                                    type="date"
                                                    id="expiryDate"
                                                    name="expiryDate"
                                                    value={medicineInfo.expiryDate}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>

                                                <div><label htmlFor="image" >Hình ảnh*</label></div>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    accept="image/*"
                                                    onChange={handleChange}
                                                    style={{ width: '32%', height: '230px', marginBottom: '17px' }}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <div><label htmlFor="supplier">Nhà cung cấp*</label></div>
                                                <input
                                                    type="text"
                                                    id="supplier"
                                                    name="supplier"
                                                    value={medicineInfo.supplier}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <div><label htmlFor="ingredient">Thành phần*</label></div>
                                                <input
                                                    type="text"
                                                    id="ingredient"
                                                    name="ingredient"
                                                    value={medicineInfo.ingredient}
                                                    onChange={handleChange}
                                                />
                                            </Box>
                                            <Box className='box'>
                                                <label htmlFor="contraindicated">Chống chỉ định*</label>
                                                <textarea
                                                    id="contraindicated"
                                                    name="contraindicated"
                                                    value={medicineInfo.contraindicated}
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

export default AddMedicine;