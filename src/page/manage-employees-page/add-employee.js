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
} from "@mui/material";
import { Password } from "@mui/icons-material";

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
                        <label htmlFor="fullName">Họ và tên *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={employeeInfo.fullname}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label htmlFor="password">Mật khẩu *</label>
                        <input
                          type="text"
                          id="password"
                          name="password"
                          value={employeeInfo.password}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label htmlFor="email">Email*</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={employeeInfo.email}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label htmlFor="dob">Ngày sinh*</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={employeeInfo.dob}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label htmlFor="dutyType">Chức vụ*</label>
                        <Select
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
                      <Box className="box">
                        <label htmlFor="degreeType">Bằng cấp*</label>
                        <Select
                          type="text"
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
                    <Grid item xs={5} sx={{ marginLeft: "10%" }}>
                      <Box className="box">
                        <div>
                          <label htmlFor="username">Tên người dùng*</label>
                        </div>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={employeeInfo.username}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <div>
                          <label htmlFor="sex">Giới tính*</label>
                        </div>
                        <Select
                          type="text"
                          id="sex"
                          name="sex"
                          value={employeeInfo.sex}
                          onChange={handleChange}
                        >
                          <MenuItem value="male">Nam</MenuItem>
                          <MenuItem value="female">Nữ</MenuItem>
                        </Select>
                      </Box>
                      <Box className="box">
                        <div>
                          <label htmlFor="phone">Số điện thoại*</label>
                        </div>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          value={employeeInfo.phone}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <div>
                          <label htmlFor="address">Nhập địa chỉ*</label>
                        </div>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={employeeInfo.address}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <div>
                          <label htmlFor="department">Phòng ban*</label>
                        </div>
                        <Select
                          type="text"
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
                    <Button className="xinnghi" style={{ textTransform: 'none', fontWeight: '700', fontSize: '18px' }} >Hủy</Button>
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
