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

const AddCalendar = ({ open, onClose, deviceInfo1 }) => {
    const acc = useSelector(state => {
        if (state.auth.userData) {
          return state.auth.userData;
        }
        return null; // hoặc giá trị mặc định phù hợp với ứng dụng của bạn
      });
    const [calendar, setCalendar] = useState({
        employeeId: acc.userId,
        description: '',
        startTime: '',
        endTime: '',
        status: "TO_DO"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCalendar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async(event) => {
        try {
            await api.post('tasks/create-task', calendar);
            // Sau khi gọi API thành công, bạn có thể thực hiện các xử lý khác ở đây
            console.log("Task added successfully!");
          } catch (error) {
            console.error("Error adding task:", error);
          }

        onClose(); // Đóng dialog sau khi đã xử lý
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thêm lịch trực</DialogTitle>
            <DialogContent>
                <Box sx={{ width: '70%', marginTop: "20px" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tên nhân viên"
                                    variant="outlined"
                                    name="name"
                                    value={acc.name}
                                    onChange={handleChange}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mô tả công việc"
                                    variant="outlined"
                                    name="description"
                                    value={calendar.description}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                Ngày trực
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="date"
                                    name="startTime"
                                    value={calendar.startTime}
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
