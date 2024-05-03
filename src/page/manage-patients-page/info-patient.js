import { React, useState, useEffect } from "react";
import '../../App.css'
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography, TableCell, TableRow, Button, IconButton, colors } from "@mui/material";
import api from "../../api"
import { useParams } from 'react-router-dom';
import DeleteConfirmationDialog from "../../component/DeleteDialog";
import AddRecordDialog from "./addRecord";
import EditRecordDialog from "./editRecord";
import AddIcon from "@mui/icons-material/Add"


const PatientInfo = () => {
    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString(); // Sử dụng phương thức toLocaleString() để chuyển đổi thành định dạng ngày tháng phù hợp
    };
    const [data, setData] = useState([])
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
    const image = 'https://bizweb.dktcdn.net/100/438/408/files/meme-ech-xanh-yody-vn-5.jpg?v=1692246402739';
    return (

        <Box className="box-info" >
            <Box className="box-info_head" >
                <Box className="rectangle or"></Box>
                <Box className="rectangle yl"></Box>
            </Box>
            <Box className="avatar-info">
                <img src={image} alt="con pepe" style={{ width: '100%', height: '100%' }} />
            </Box>
            {/* <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} textTransform={'capitalize'}>{name}</Typography> */}
            <Box className="paragraph-soyeulylich">
                <Typography className="title-info_typo" fontWeight={900} fontSize={32} marginTop={1} fontFamily={"Lato"}>{data.name}</Typography>
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Sơ yếu lí lịch:</Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Ngày-tháng-năm sinh: {data.dob}
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Giới tính: {data.gender === "male" ? "Nam" : "Nữ"}
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
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>
                    Hồ sơ bệnh án:
                    <IconButton onClick={handleAddClick}
                        color="primary"
                    ><AddIcon /></IconButton>
                </Typography>
                <Table >
                    <TableHead style={{
                        margin: '20px 0',
                        outline: 'none',
                        borderColor: 'none'
                    }}>
                        <TableRow>
                            <TableCell style={{ top: 0, fontSize: '17px', fontWeight: '700', textAlign: 'center' }}>ID</TableCell>
                            <TableCell style={{ top: 0, fontSize: '17px', fontWeight: '700', textAlign: 'center' }}>Chẩn đoán</TableCell>
                            <TableCell style={{ top: 0, fontSize: '17px', fontWeight: '700', textAlign: 'center' }}>Thời gian vào viện</TableCell>
                            <TableCell style={{ top: 0, fontSize: '17px', fontWeight: '700', textAlign: 'center' }}>Thời gian ra viện</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                    <DeleteConfirmationDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} apiURL={`medicalRecords/${selectedRow.id}`} />
                    <EditRecordDialog open={openEditDialog} onClose={handleEditDialogClose} id={id} info={selectedRow} />
                </Table>
                <AddRecordDialog open={openAddDialog} onClose={handleAddDialogClose} info={Number(id)} />
            </Box>
        </Box >

    );
};

export default PatientInfo;