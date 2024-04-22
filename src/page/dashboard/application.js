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

const Application = ({ open, onClose, deviceInfo1 }) => {
    const [application, setApplication] = useState({
        name: '',
        code: '',
        reason: '',
        dateStart: '',
        dateEnd: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setApplication((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        onClose(); // Đóng dialog sau khi đã xử lý
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đơn xin nghỉ</DialogTitle>
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
                                    value={application.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mã số nhân viên"
                                    variant="outlined"
                                    name="code"
                                    value={application.code}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    fullWidth
                                    minRows={5}
                                    placeholder="Lí do xin nghỉ"
                                    name="booking"
                                    value={application.booking}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                Nghỉ từ ngày
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    name="dateStart"
                                    value={application.dateStart}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                Đến ngày
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    name="dateEnd"
                                    value={application.dateEnd}
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
export default Application;
