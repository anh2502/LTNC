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
import { useSelector } from 'react-redux';
import api from "../../api";

const Application = ({ open, onClose, deviceInfo1 }) => {
    const acc = useSelector(state => {
        if (state.auth.userData) {
          return state.auth.userData;
        }
        return null; // hoặc giá trị mặc định phù hợp với ứng dụng của bạn
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

    const handleSubmit = async(event) => {
        try {
            await api.post('leave-apps/create-leaveApp', application);
            // Sau khi gọi API thành công, bạn có thể thực hiện các xử lý khác ở đây
            console.log("Task added successfully!");
          } catch (error) {
            console.error("Error adding task:", error);
          }

        onClose(); // Đóng dialog sau khi đã xử lý
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đơn xin nghỉ</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '70%', marginTop: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                Tên nhân viên
                                <TextField
                                    fullWidth
                                    // label="Tên nhân viên"
                                    variant="outlined"
                                    name="name"
                                    value={acc.name}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            Mã số nhân viên
                                <TextField
                                    fullWidth
                                    // label="Mã số nhân viên"
                                    variant="outlined"
                                    name="employeeId"
                                    value={acc.userId}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    fullWidth
                                    minRows={5}
                                    placeholder="Lí do xin nghỉ"
                                    name="reason"
                                    value={application.reason}
                                    onChange={handleChange}
                                />
                            </Grid>
                            {/* <Grid item xs={12} md={6}>
                                Nghỉ từ ngày
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    name="dateStart"
                                    value={application.dateStart}
                                    onChange={handleChange}
                                />
                            </Grid> */}
                            <Grid item xs={12} md={6}>
                                Ngày nghỉ
                                <TextField
                                    fullWidth
                                    variant="outlined"
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
