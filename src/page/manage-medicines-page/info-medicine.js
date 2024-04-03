import React from "react";
import '../../App.css'
import { useState } from "react";
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AllInboxIcon from '@mui/icons-material/AllInbox';


const MedicineInfo = () => {
    const [medicineInfo, setMedicineInfo] = useState({
        name: 'Paracetamol',
        code: '123456',
        manufactureDate: '2023-12-24',
        expiryDate: '2026-12-24',
        uses: 'Giảm đau, hạ sốt',
        image: '../../img/pepe.jpg',
        quantity: '100',
        supplier: 'Công ty Dược phẩm ABC',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMedicineInfo((prevState) => ({
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
            <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"}>Paracetamol</Typography>
            <Stack direction={'row'} spacing={25} marginLeft={'3.4%'}>
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">
                        <CalendarMonthIcon />
                    </Box>
                    <Box className="content-info-ele">
                        <Typography color={'#303972'}>
                            2023-12-24
                        </Typography>
                    </Box>
                </Box>
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">
                        <CalendarMonthIcon />
                    </Box>
                    <Box className="content-info-ele">
                        <Typography color={'#303972'}>
                            2026-12-24
                        </Typography>
                    </Box>
                </Box>
                <Box className='stack-info-ele' gap={1} >
                    <Box className="icon-info-ele">
                        <AllInboxIcon />
                    </Box>
                    <Box className="content-info-ele" marginTop={0.5}>
                        <Typography color={'#303972'}>
                            100
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Công dụng:</Typography>
            <Box className="paragraph-congdung">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Paracetamol 500mg vừa là một loại thuốc giảm đau không kê đơn, có thể mua được ở các nhà thuốc và vừa là thuốc giảm đau có kê đơn, được bác sĩ chỉ định sử dụng trong nhiều trường hợp như trị đau nửa đầu, hạ sốt, hỗ trợ điều trị cảm cúm,…
                    Paracetamol 500mg không chứa hoạt tính kháng viêm, có độ an toàn cao. Ngay cả phụ nữ đang mang thai, cho con bú và trẻ em cũng có thể sử dụng thuốc trong trường hợp thật sự cần thiết.
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Chỉ định:</Typography>
            <Box className="paragraph-chidinh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Có thể dùng thuốc paracetamol để giảm đau, điều trị các cơn đau do nhiều nguyên nhân khác nhau như đau nửa đầu, đau đầu do kinh nguyệt, đau bụng kinh, đau lưng, đau răng, đau nhức cơ xương khớp,… Thuốc cũng được chỉ định sử dụng để hỗ trợ giảm sốt cũng như cải thiện các cơn đau nhức do cảm cúm, cảm lạnh.
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Chống chỉ định:</Typography>
            <Box className="paragraph-chongchidinh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                    Paracetamol được chống chỉ định trong những trường hợp quá mẫn cảm với thuốc; suy gan, suy thận nặng; thiếu máu liên tục nhiều lần; thiếu hụt glucose-6-phosphat dehydrogenase (G6PD),… Người nghiện rượu, vừa uống rượu hoặc những người bị suy dinh dưỡng nặng, đang sử dụng thuốc có thành phần tương tác với paracetamol cũng không nên sử dụng loại thuốc giảm đau này hoặc chỉ dùng theo tư vấn chỉ định của bác sĩ.
                </Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Thành phần:</Typography>
            <Box className="paragraph-thanhphan">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'} marginBottom={3}>
                    World History, Philosophy, Prehistoric, Culture, Ancient
                </Typography>
            </Box>
        </Box>

    );
};

export default MedicineInfo;