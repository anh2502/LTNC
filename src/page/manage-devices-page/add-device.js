import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import { Box, Grid, Select, MenuItem, Snackbar, Alert, Button, TextField, styled } from "@mui/material";
import api from "../../api"
import { Link } from "react-router-dom";
const LinkAdd = styled(Link)({
  textDecoration: 'none',
});
const AddDevice = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbar2, setOpenSnackbar2] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    name: "",
    status: "MAINTENANCE",
    quantities: 1,
    inputDate: "",
    supplier: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDeviceInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(deviceInfo);
    try {
      const res = await api.post("equipments/save-equipment", deviceInfo);
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
              Thông tin thiết bị
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
                          Tên thiết bị*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="name"
                          value={deviceInfo.name}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">

                          Người nhập hàng*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          name="supplier"
                          value={deviceInfo.supplier}
                          onChange={handleChange}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={6} sx={{ paddingLeft: "10%" }}>
                      <Box className="box">
                        <label className="label">

                          Ngày nhập*
                        </label>
                        <TextField
                          className="textfield"
                          fullWidth
                          variant="outlined"
                          type="date"
                          name="inputDate"
                          value={deviceInfo.inputDate}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box className="box">
                        <label className="label">
                          Trạng thái*
                        </label>
                        <Select
                          fullWidth
                          value={deviceInfo.status}
                          onChange={handleChange}
                          id="status"
                          name="status"
                        >
                          <MenuItem value="MAINTENANCE">
                            Đang bảo trì
                          </MenuItem>
                          <MenuItem value="READY">
                            Đang hoạt động
                          </MenuItem>
                          <MenuItem value="BROKEN">Bị hỏng</MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div className="summitFooter" >
                  <div style={{ borderRadius: '40px', overflow: 'hidden' }}>
                    <LinkAdd to="/manage-devices">
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
            Nhập thành công!
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
      </TableContainer>
    </div>
  );
};

export default AddDevice;
