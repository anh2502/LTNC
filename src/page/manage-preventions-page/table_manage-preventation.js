import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { Button } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import api from "../../api";

import AddPatientDialog from '../manage-preventions-page/addPatientDialog';
import DeleteConfirmationDialog from "../../component/DeleteDialog";

const CollapsibleTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [rows, setRows] = useState([]);
  const [open,setOpen]=useState(false);
  const [selectedRow, setSelectedRow] = useState()
  const [selectedPatitent, setSelectedPatient] = useState()
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDelRoomDialog, setOpenDelRoomDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClose = () => {
    fetchData();
    setOpen(false);
  };
  const handleDeleteDialogClose = () => {
    fetchData()
    setOpenDeleteDialog(false);
};

  const handleAdd = (row) => {
    setSelectedRow(row)
    setOpen(true);
  };
  const handleDel = (row, pati) => {
    setSelectedPatient(pati)
    setSelectedRow(row)
    setOpenDeleteDialog(true);
  };
  const handleDelRoom = (row)=>{
    setSelectedRow(row)
    setOpenDelRoomDialog(true)
  }
  const handleCloseRoom=()=>{
    fetchData();
    setOpenDelRoomDialog(false)
  }

  const fetchData = async () => {
    try {
      const response = await api.get(`/rooms/`, {
        params: {
          pageNo: 0,
          pageSize: 30,
          sortBy: "name",
          searchFlag: false,
        },
      });
      setRows(response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          height: "50%",
          borderRadius: "20px",
          overflowY: "hidden",
        }}
      >
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Phòng</TableCell>
                <TableCell align="center">Giường bệnh khả dụng</TableCell>
                <TableCell>Bệnh nhân</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.room}>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell align="center">{row.roomId}</TableCell>
                    <TableCell align="center">{row.capacity}</TableCell>
                    <TableCell>
                      {row.patients.map((patient, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "8px", backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                          <div style={{ width: "30px", textAlign: "center", fontWeight: "bold" }}>{index + 1}</div>
                          <div style={{ flex: 1 }}>Tên: {patient.patientName}</div>
                          <div style={{ marginLeft: "20px" }}>Số giường: {patient.bedNumber}</div>
                          <Button onClick={()=>handleDel(row.roomId,patient.patientId)}>Xóa bệnh nhân</Button>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell align="center">
                      <Button onClick={()=>handleAdd(row.roomId)}>Thêm bệnh nhân</Button>
                      <Button onClick={()=>handleDelRoom(row.roomId)}>Xóa phòng</Button>
                      
                    </TableCell>
                  </TableRow>
                  <AddPatientDialog open={open} onClose={handleClose} roomId={selectedRow} />
                  <DeleteConfirmationDialog open={openDeleteDialog} onClose={handleDeleteDialogClose}  apiURL ={`rooms/${selectedRow}/patients/${selectedPatitent}`}/>
                  <DeleteConfirmationDialog open={openDelRoomDialog} onClose={handleCloseRoom}  apiURL ={`rooms/${selectedRow}`}/>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          margin={20}
          background={"#fff"}
        />
      </Paper>
    </div>
  );
};

export default CollapsibleTable;
