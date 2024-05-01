import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import { Box, Grid, Select, MenuItem, Snackbar, Alert, Button } from "@mui/material";
import api from "../../api"

const AddMedicine = () => {
  const [medicineInfo, setMedicineInfo] = useState({
    name: "",
    medicineType: "CAPSULE",
    medicalUseType: "ANALGESICS",
    price: "",
    ingredient: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbar2, setOpenSnackbar2] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedicineInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(medicineInfo);
    try {
      const res = await api.post("medicines/create", medicineInfo);
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
          minHeight: 900,
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
              Thông tin thuốc
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
                      <Box className="box medicine">
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
                      <Box className="box">
                        <label htmlFor="medicineType">Loại*</label>
                        <Select
                          className="input-select"
                          fullWidth
                          type="text"
                          id="medicineType"
                          name="medicineType"
                          value={medicineInfo.medicineType}
                          onChange={handleChange}
                        >
                          <MenuItem value="CAPSULE">Viên nang</MenuItem>
                          <MenuItem value="SPRAY">Xịt</MenuItem>
                          <MenuItem value="GRANULE">Hạt</MenuItem>
                          <MenuItem value="LIQUID">Dạng lỏng</MenuItem>
                          <MenuItem value="CREAM">Kem</MenuItem>
                        </Select>
                      </Box>
                      <Box className="box">
                        <label htmlFor="medicalUseType">Dược tính*</label>
                        <Select
                          className="input-select"
                          fullWidth
                          type="text"
                          id="medicalUseType"
                          name="medicalUseType"
                          value={medicineInfo.medicalUseType}
                          onChange={handleChange}
                        >
                          <MenuItem value="ANALGESICS">Thuốc giảm đau</MenuItem>
                          <MenuItem value="ANTIBIOTICS">Kháng sinh</MenuItem>
                          <MenuItem value="ANTIPYRETICS">Thuốc hạ sốt</MenuItem>
                          <MenuItem value="HORMONES">Hormones</MenuItem>
                          <MenuItem value="SEDATIVES">Thuốc an thần</MenuItem>

                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={5} sx={{ marginLeft: "10%" }}>
                      <Box className="box">
                        <label htmlFor="price">Giá*</label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          value={medicineInfo.price}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label htmlFor="ingredient">Thành phần*</label>
                        <input
                          type="text"
                          id="ingredient"
                          name="ingredient"
                          value={medicineInfo.ingredient}
                          onChange={handleChange}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div className="summitFooter">
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
          Thêm thành công!
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
          Có lỗi xảy ra, vui lòng thử lại!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddMedicine;
