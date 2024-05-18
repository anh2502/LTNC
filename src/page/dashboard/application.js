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
    InputLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import api from "../../api";

const CustomInputLabel = styled(InputLabel)(({ theme, isFocused }) => ({
    position: 'absolute',
    top: '-9px',
    left: '8px',
    backgroundColor: 'white',
    padding: '0 10px',
    color: isFocused ? theme.palette.primary.main : ' rgba(0, 0, 0, 0.6);',
    fontSize: '1rem',
    fontWeight: '400',
}));

const Application = ({ open, onClose, deviceInfo1 }) => {
    const acc = useSelector(state => {
        if (state.auth.userData) {
            return state.auth.userData;
        }
        return null;
    });
    const [application, setApplication] = useState({
        employeeId: acc.userId,
        reason: '',
        timeOff: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setApplication((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        try {
            await api.post('leave-apps/create-leaveApp', application);
            // Sau khi gọi API thành công, bạn có thể thực hiện các xử lý khác ở đây
            console.log("Task added successfully!");
        } catch (error) {
            console.error("Error adding task:", error);
        }

        onClose(); // Đóng dialog sau khi đã xử lý
    };
    const [isFocused, setIsFocused] = React.useState(true);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đơn xin nghỉ</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '70%', marginTop: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tên nhân viên"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="name"
                                    value={acc.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mã số nhân viên"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="employeeId"
                                    value={acc.userId}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ position: 'relative' }}>
                                    <CustomInputLabel shrink={isFocused} htmlFor="dateInput">Lí do</CustomInputLabel>
                                    <TextareaAutosize
                                        fullWidth
                                        style={{
                                            width: '100%'
                                        }}
                                        minRows={5}
                                        id="dateInput"
                                        name="reason"
                                        value={application.reason}
                                        onFocus={() => setIsFocused(true)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Ngày nghỉ"
                                    type="date"
                                    name="timeOff"
                                    value={application.timeOff}
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
