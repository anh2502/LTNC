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
  styled,
} from "@mui/material";
import { Password } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LinkAdd = styled(Link)({
  textDecoration: 'none',
});

const AddEmployee = () => {
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

  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <TableContainer
        sx={{
          maxHeight: 900,
          borderRadius: "20px",
          paddingLeft: "20px",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        <Table>
          <TableHead sx={{ borderRadius: "20px", paddingLeft: "20px" }}>
            <TableCell
              style={{
                backgroundColor: "#4D44B5",
                borderRadius: "20px 0px 0px",
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Lato",
                lineHeight: "36px",
                paddingLeft: "4%",
              }}
            >
              Thông tin nhân viên
            </TableCell>
          </TableHead>
          <TableBody>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "0px 0px 20px 20px",
              }}
              className="add-medicine"
            >
              <form onSubmit={handleSubmit} className="formSumit">
                <div
                  style={{
                    width: "100%",
                    color: "#303972",
                    fontSize: 18,
                    fontFamily: "Lato",
                    fontWeight: "600",
                    display: "flex",
                  }}
                  className="medicine-info"
                >
                  <Grid container my={2}>
                    <Grid item xs={5}>
                      <Box className="box">
                        <label className="label">
                          Họ và tên *
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="fullName"
                          value={employeeInfo.fullName}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Mật khẩu *
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          type="password"
                          name="password"
                          value={employeeInfo.password}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Email*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="email"
                          value={employeeInfo.email}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Ngày sinh*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="dob"
                          type="date"
                          value={employeeInfo.dob}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <Grid container my={2}>
                          <Grid item xs={5.5} >
                            <Box>
                              <label className="label">
                                Chức vụ*
                              </label>
                              <Select
                                fullWidth
                                value={employeeInfo.dutyType}
                                onChange={handleChange}
                                id="dutyType"
                                name="dutyType"
                              >
                                <MenuItem value="DOCTOR_LEVER_1">
                                  Bác sĩ cấp 1
                                </MenuItem>
                                <MenuItem value="DOCTOR_LEVER_2">
                                  Bác sĩ cấp 2
                                </MenuItem>
                                <MenuItem value="NURSER">Y tá</MenuItem>
                                <MenuItem value="MEDICINE_MANAGER">
                                  Quản lý y tế
                                </MenuItem>
                                <MenuItem value="EQUIPMENT_MANAGER">
                                  Quản lý thiết bị
                                </MenuItem>
                                <MenuItem value="DEAN">Admin</MenuItem>
                              </Select>
                            </Box>
                          </Grid>
                          <Grid item xs={5.5} marginLeft={'auto'}>
                            <Box>
                              <label className="label">
                                Bằng cấp*
                              </label>
                              <Select
                                fullWidth
                                id="degreeType"
                                name="degreeType"
                                value={employeeInfo.degreeType}
                                onChange={handleChange}
                              >
                                <MenuItem value="BACHELOR_OF_MEDICINE">
                                  Bác sĩ cơ sở
                                </MenuItem>
                                <MenuItem value="BACHELOR_OF_MEDICAL_SCIENCES">
                                  Bác sĩ y dược cơ bản
                                </MenuItem>
                                <MenuItem value="BACHELOR_OF_PUBLIC_HEALTH">
                                  Y sĩ công cộng
                                </MenuItem>
                                <MenuItem value="BACHELOR_OF_SURGERY">
                                  Bác sĩ phẫu thuật
                                </MenuItem>
                                <MenuItem value="BACHELOR">Bằng cử nhân</MenuItem>
                                <MenuItem value="DOCTOR_OF_MEDICINE">
                                  Tiến sĩ y học
                                </MenuItem>
                              </Select>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={5} sx={{ marginLeft: "10%" }}>
                      <Box className="box">
                        <label className="label">
                          Tên người dùng*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="username"
                          value={employeeInfo.username}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Giới tính*
                        </label>
                        <Select
                          fullWidth
                          id="sex"
                          name="sex"
                          value={employeeInfo.sex}
                          onChange={handleChange}
                        >
                          <MenuItem value="male">Nam</MenuItem>
                          <MenuItem value="female">Nữ</MenuItem>
                          <MenuItem value="other">Khác</MenuItem>
                        </Select>
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Số điện thoại*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          type="number"
                          name="phone"
                          value={employeeInfo.phone}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Nhập địa chỉ*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="address"
                          value={employeeInfo.address}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Phòng ban*
                        </label>
                        <Select
                          fullWidth
                          id="department"
                          name="department"
                          value={employeeInfo.department}
                          onChange={handleChange}
                        >
                          <MenuItem value="EMERGENCY_DEPARTMENT">
                            Bộ phận cấp cứu
                          </MenuItem>
                          <MenuItem value="INTERNAL_MEDICINE">
                            Nội khoa
                          </MenuItem>
                          <MenuItem value="PEDIATRICS">Nhi khoa</MenuItem>
                          <MenuItem value="SURGERY">Phẫu thuật</MenuItem>
                          <MenuItem value="OBSTETRICS_AND_GYNECOLOGY">
                            Sản phụ
                          </MenuItem>
                          <MenuItem value="CARDIOLOGY">Tim mạch</MenuItem>
                          <MenuItem value="NEUROLOGY">Thần kinh học</MenuItem>
                          <MenuItem value="PSYCHIATRY">Tâm thần học</MenuItem>
                          <MenuItem value="OPHTHALMOLOGY">Mắt</MenuItem>
                          <MenuItem value="DERMATOLOGY">Da liễu</MenuItem>
                          <MenuItem value="ORTHOPEDICS">
                            Chấn thương chỉnh hình
                          </MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div className="summitFooter" style={{ textAlign: "center" }}>
                  <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                    <LinkAdd to="/manage-employees">
                      <Button className="xinnghi" style={{ textTransform: 'none', fontWeight: '700', fontSize: '18px' }} >Hủy</Button>
                    </LinkAdd>
                  </div>
                  <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                    <Button onClick={handleSubmit} className="xinnghi" style={{ backgroundColor: "#4d44b5", color: 'white', textTransform: 'none', fontWeight: '700', fontSize: '18px' }} >Gửi</Button>
                  </div>
                </div>
              </form>
            </div>
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Tạo tài khoản thành công!
        </Alert>
      </Snackbar>
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
    </div>
  );
};

export default AddEmployee;
