import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import api from "../../api";

import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Snackbar,
    Alert,
    Button,
    TextField,
    Container,
    Typography,
    DialogActions,
    DialogContent,
    Dialog,
    DialogTitle,
    DialogContentText,
} from "@mui/material";
import { Password } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";

const Signin = () => {
    const [employeeInfo, setEmployeeInfo] = useState({
        username: "",
        fullName: "",
        password: "",
        email: "",
        dob: "",
        sex: "male",
        phone: "",
        address: "",
        dutyType: "DOCTOR_LEVER_1",
        department: "EMERGENCY_DEPARTMENT",
        degreeType: "BACHELOR_OF_MEDICINE",
    });
    const [submitMessage, setSubmitMessage] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openSnackbar2, setOpenSnackbar2] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        console.log(employeeInfo);
        try {
            const res = await api.post("accounts/create-employee", employeeInfo);
            console.log(res);
            // Kiểm tra nếu request thành công
            if (res.status === 201) {
                setOpenSnackbar(true)
                setSubmitMessage('Đăng kí thành công!');
                setOpenDialog(true);
            } else {
                // Xử lý trường hợp request không thành công
                setOpenSnackbar2(true)
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            setOpenSnackbar2(true)
            console.error("Error:", error);
        }
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Container maxWidth="xs">
            <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" color={"#303972"}>Hospital</Typography>
                <form style={{ marginTop: '20px', width: '100%', color: '#303972' }}>
                    Tên đăng nhập
                    <TextField
                        className="textfield"
                        fullWidth
                        variant="outlined"
                        type="text"
                        margin="normal"
                        name="username"
                        value={employeeInfo.username}
                        onChange={handleChange}
                    />
                    Mật khẩu
                    <TextField
                        className="textfield"
                        fullWidth
                        type="password"
                        variant="outlined"
                        name="password"
                        margin="normal"
                        value={employeeInfo.password}
                        onChange={handleChange}
                    />
                    Email
                    <TextField
                        className="textfield"
                        fullWidth
                        type="email"
                        variant="outlined"
                        name="email"
                        margin="normal"
                        value={employeeInfo.email}
                        onChange={handleChange}
                    />
                    Số điện thoại
                    <TextField
                        className="textfield"
                        fullWidth
                        type="number"
                        variant="outlined"
                        name="phone"
                        margin="normal"
                        value={employeeInfo.phone}
                        onChange={handleChange}
                    />
                    Địa chỉ
                    <TextField
                        className="textfield"
                        fullWidth
                        type="text"
                        variant="outlined"
                        name="address"
                        margin="normal"
                        value={employeeInfo.address}
                        onChange={handleChange}
                    />
                    Họ và tên
                    <TextField
                        className="textfield"
                        fullWidth
                        type="text"
                        variant="outlined"
                        name="fullName"
                        margin="normal"
                        value={employeeInfo.fullName}
                        onChange={handleChange}
                    />
                    Giới tính
                    <div style={{ margin: '10px 0' }}>
                        <Select
                            fullWidth
                            name="sex"
                            className="textfield"
                            variant="outlined"
                            value={employeeInfo.sex}
                            onChange={handleChange}
                        >
                            <MenuItem value="Nam">Nam</MenuItem>
                            <MenuItem value="Nữ">Nữ</MenuItem>
                            <MenuItem value="Khác">Khác</MenuItem>
                        </Select>
                    </div>
                    Ngày sinh
                    <TextField
                        className="textfield"
                        fullWidth
                        type="date"
                        variant="outlined"
                        name="dob"
                        margin="normal"
                        value={employeeInfo.dob}
                        onChange={handleChange}
                    />

                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} style={{ marginTop: '20px' }}>
                        Đăng kí
                    </Button>
                </form>
            </div>

            <Link to="/login">
                <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth >
                    <DialogTitle>Thông báo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {submitMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Đóng
                        </Button>
                    </DialogActions>
                </Dialog>
            </Link>
            <Snackbar
                open={openSnackbar2}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar2(false)}
            >
                <Alert
                    onClose={() => setOpenSnackbar2(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    Tên người dùng hoặc email đã tồn tại!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Signin;
