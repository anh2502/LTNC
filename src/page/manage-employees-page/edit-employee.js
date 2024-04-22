import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
import { constrainPoint } from "@fullcalendar/core/internal";
import api from "../../api"

const EditEmployeeDialog = ({ open, onClose, info }) => {
  const [editedEmployeeInfo, setEditedEmployeeInfo] = useState(info);
  const [openSnackbar2, setOpenSnackbar2] = useState(false);

  useEffect(() => {
    setEditedEmployeeInfo(info);
  }, [info]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployeeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    console.log(editedEmployeeInfo);
    const { employeeName, phoneNumber, address, dutyType, degreeType, sex, department } = editedEmployeeInfo;

    const newEmployeeInfo = {
      username: "", // Thêm giá trị mong muốn cho username
      password: "", // Thêm giá trị mong muốn cho password
      email: "", // Thêm giá trị mong muốn cho email
      phone: phoneNumber,
      address: address,
      dutyType: dutyType,
      fullName: employeeName,
      degreeType: degreeType,
      sex: sex,
      department: department,
    };
    console.log(newEmployeeInfo);
    try {
      const res = await api.patch(`employees/${info.employeeId}`, newEmployeeInfo);
      console.log(res);
      // Kiểm tra nếu request thành công
      if (res.status === 200) {
          onClose();
      } else {
          openSnackbar2(true)
      }
  } catch (error) {
      // Xử lý lỗi nếu có
      // setOpenSnackbar2(true)
      console.error("Error:", error);
  } 

    // onClose(); // Đóng dialog sau khi đã xử lý
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin nhân viên</DialogTitle>
      <DialogContent>
        <Box sx={{ width: "400px" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <label>Họ và tên</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="fullName"
                  value={editedEmployeeInfo.employeeName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <label>Giới tính</label>
                <Select
                  fullWidth
                  type="text"
                  id="sex"
                  name="sex"
                  value={editedEmployeeInfo.sex}
                  onChange={handleChange}
                >
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <label>Số điện thoại</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="phoneNumber"
                  value={editedEmployeeInfo.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Địa chỉ</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="address"
                  value={editedEmployeeInfo.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Chức vụ</label>
                <Select
                  fullWidth
                  value={editedEmployeeInfo.dutyType}
                  onChange={handleChange}
                  id="dutyType"
                  name="dutyType"
                >
                  <MenuItem value="DOCTOR_LEVER_1">Bác sĩ cấp 1</MenuItem>
                  <MenuItem value="DOCTOR_LEVER_2">Bác sĩ cấp 2</MenuItem>
                  <MenuItem value="NURSER">Y tá</MenuItem>
                  <MenuItem value="MEDICINE_MANAGER">Quản lý y tế</MenuItem>
                  <MenuItem value="EQUIPMENT_MANAGER">
                    Quản lý thiết bị
                  </MenuItem>
                  <MenuItem value="DEAN">Admin</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <label>Phòng ban</label>
                <Select
                  fullWidth
                  type="text"
                  id="department"
                  name="department"
                  value={editedEmployeeInfo.department}
                  onChange={handleChange}
                >
                  <MenuItem value="EMERGENCY_DEPARTMENT">
                    Bộ phận cấp cứu
                  </MenuItem>
                  <MenuItem value="INTERNAL_MEDICINE">Nội khoa</MenuItem>
                  <MenuItem value="PEDIATRICS">Nhi khoa</MenuItem>
                  <MenuItem value="SURGERY">Phẫu thuật</MenuItem>
                  <MenuItem value="OBSTETRICS_AND_GYNECOLOGY">Sản phụ</MenuItem>
                  <MenuItem value="CARDIOLOGY">Tim mạch</MenuItem>
                  <MenuItem value="NEUROLOGY">Thần kinh học</MenuItem>
                  <MenuItem value="PSYCHIATRY">Tâm thần học</MenuItem>
                  <MenuItem value="OPHTHALMOLOGY">Mắt</MenuItem>
                  <MenuItem value="DERMATOLOGY">Da liễu</MenuItem>
                  <MenuItem value="ORTHOPEDICS">
                    Chấn thương chỉnh hình
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <label>Bằng cấp</label>
                <Select
                  fullWidth
                  type="text"
                  id="degreeType"
                  name="degreeType"
                  value={editedEmployeeInfo.degreeType}
                  onChange={handleChange}
                >
                  <MenuItem value="BACHELOR_OF_MEDICINE">Bác sĩ cơ sở</MenuItem>
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
                  <MenuItem value="DOCTOR_OF_MEDICINE">Tiến sĩ y học</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Lưu
        </Button>
      </DialogActions>
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
          Có lỗi xảy ra, vui lòng thử lại!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default EditEmployeeDialog;
