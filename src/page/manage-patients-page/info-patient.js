import {React, useState, useEffect} from "react";
import '../../App.css'
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography, TableCell, TableRow, Button } from "@mui/material";
import api from "../../api"
import { useParams } from 'react-router-dom';
import DeleteConfirmationDialog from "../../component/DeleteDialog";
import AddRecordDialog from "./addRecord";
import EditRecordDialog from "./editRecord";


const PatientInfo = () => {
    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString(); // Sử dụng phương thức toLocaleString() để chuyển đổi thành định dạng ngày tháng phù hợp
      };
    const [data, setData]= useState([])
    const { id } = useParams();
    const [selectedRow, setSelectedRow] = useState([]);
    const [selectedId, setSelectedId] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const handleAddClick = (row) => {
        setSelectedRow(row);
        setOpenAddDialog(true);
    };
    const handleEditClick = (row) => {
        setSelectedRow(row);
        setOpenEditDialog(true);
    };
    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpenDeleteDialog(true);
    };

    const handleEditDialogClose = () => {
        fetchData2();
        setOpenEditDialog(false);
    };
    const handleAddDialogClose = () => {
        fetchData2();
        setOpenAddDialog(false);
    };
    const handleDeleteDialogClose = () => {
        fetchData2();
        setOpenDeleteDialog(false);
    };
    const fetchData2 = async () => {
        try {
            const response = await api.get(`/patients/${id}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/patients/${id}`);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]); 
    return (
        <Box className="box-info" >
           
            {/* <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} textTransform={'capitalize'}>{name}</Typography> */}
            <Box className="paragraph-soyeulylich">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Sơ yếu lý lịch:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Tên: {data.name}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Ngày/tháng/năm sinh: {data.dob}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Giới tính: {data.gender=="male"?"Nam": "Nữ"}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Mã số BHYT: {data.bhyt}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Địa chỉ: {data.address}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Số điện thoại: {data.phone}
                </Typography>
            </Box>
            <Box>
      <Typography variant="h6" gutterBottom>
        Hồ sơ bệnh án
        <Button onClick={handleAddClick}>Thêm</Button>
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Chẩn đoán</TableCell>
            <TableCell>Thời gian vào viên</TableCell>
            <TableCell>Thời gian ra viện</TableCell>
            <TableCell></TableCell>
            {/* Add more table headers here if needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.medicalRecords && data.medicalRecords.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.id}</TableCell>
              <TableCell>{record.diagnostic}</TableCell>
              <TableCell>{formatDateTime(record.hospitalizedTime)}</TableCell>
              <TableCell>{formatDateTime(record.leaveTime)}</TableCell>
              <TableCell align="center">
                      <Button onClick={() => handleEditClick(record)}>Sửa</Button>
                      <Button onClick={() => handleDeleteClick(record)}>Xóa</Button>
                      
                    </TableCell>
              {/* Add more table cells here if needed */}
            </TableRow>
          ))}
        </TableBody>
        <DeleteConfirmationDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} apiURL={`medicalRecords/${selectedRow.id}`} />
          <EditRecordDialog open={openEditDialog} onClose={handleEditDialogClose} id={id} info={selectedRow} />
      </Table>
      <AddRecordDialog open={openAddDialog} onClose={handleAddDialogClose} info={id} />
    </Box>
        </Box>

    );
};

export default PatientInfo;