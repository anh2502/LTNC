import React, { useState } from 'react';
import {
    Grid,
    Box,
    TextField,
    TextareaAutosize,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

const AddCalendar = ({ open, onClose, deviceInfo1 }) => {
    const [calendar, setCalendar] = useState({
        name: '',
        code: '',
        booking: '',
        date: '',
        shift: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCalendar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        onClose(); // Đóng dialog sau khi đã xử lý
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thêm lịch trực</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '70%' }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tên nhân viên"
                                    variant="outlined"
                                    name="name"
                                    value={calendar.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mã số nhân viên"
                                    variant="outlined"
                                    name="code"
                                    value={calendar.code}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phòng trực"
                                    variant="outlined"
                                    name="booking"
                                    value={calendar.booking}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                Ngày trực
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    name="date"
                                    value={calendar.date}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                Ca trực
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="time"
                                    name="shift"
                                    value={calendar.shift}
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
export default AddCalendar;
