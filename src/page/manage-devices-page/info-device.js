import React from "react";
import '../../App.css'
import { useState } from "react";
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AllInboxIcon from '@mui/icons-material/AllInbox';


const DeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState({
        name: '',
        code: '',
        manufactureDate: '',
        expiryDate: '',
        uses: '',
        image: '',
        quantity: '',
        supplier: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDeviceInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
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
            <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"}>Máy điện tim </Typography>
            <div className="stack">
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">

                        <CalendarMonthIcon />
                    </Box>
                    <Typography color={'#303972'}>
                        #Ngày sản xuất
                    </Typography>
                </Box>
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">

                        <CalendarMonthIcon />
                    </Box>
                    <Typography color={'#303972'}>
                        #Hạn sử dụng
                    </Typography>
                </Box>
                <Box className='stack-info-ele' gap={1} >
                    <Box className="icon-info-ele">

                        <AllInboxIcon />
                    </Box>
                    <Typography color={'#303972'}>
                        #Ngày bảo trì
                    </Typography>
                </Box>
            </div>
            <Box className="paragraph-congdung">
                <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Hướng dẫn sử dụng </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Máy đo điện tim là một thiết bị y tế được sử dụng để ghi lại hoạt động điện của tim. Thiết bị này sử dụng các điện cực để thu nhận tín hiệu điện từ tim và biến chúng thành đồ thị hoặc dữ liệu số để phân tích. Máy đo điện tim thường được sử dụng để theo dõi hoạt động điện của tim trong quá trình kiểm tra sức khỏe, chẩn đoán các vấn đề tim mạch, hoặc theo dõi hiệu quả của các biện pháp điều trị tim mạch.
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Lịch sử bảo trì</Typography>
            <Box className="paragraph-baotri">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Lần 1:
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Lần 2:
                </Typography>
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Lần 3:
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Tình trạng hoạt động</Typography>
            <Box className="paragraph-khambenh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Bình thường
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Lịch bảo trì</Typography>
            <Box className="paragraph-chandoan">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    30/02/2024
                </Typography>
            </Box>
        </Box>

    );
};

export default DeviceInfo;