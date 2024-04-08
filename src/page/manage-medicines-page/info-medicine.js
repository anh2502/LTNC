import React from "react";
import '../../App.css'
import { useState } from "react";
import { Box, Paper, Stack, Table, TableBody, TableHead, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AllInboxIcon from '@mui/icons-material/AllInbox';


const MedicineInfo = (image, name, dayOfManufacture, expiry, amount, importPrice, price, uses, assign, contraindicated, ingredient) => {
    image = 'https://bizweb.dktcdn.net/100/438/408/files/meme-ech-xanh-yody-vn-5.jpg?v=1692246402739';
    name = 'Paracetamol';
    dayOfManufacture = '2023-12-24';
    expiry = '2026-12-24';
    amount = '100';
    importPrice = '100$';
    price = '200$';
    uses = 'Paracetamol 500mg vừa là một loại thuốc giảm đau không kê đơn, có thể mua được ở các nhà thuốc và vừa là thuốc giảm đau có kê đơn, được bác sĩ chỉ định sử dụng trong nhiều trường hợp như trị đau nửa đầu, hạ sốt, hỗ trợ điều trị cảm cúm,… Paracetamol 500mg không chứa hoạt tính kháng viêm, có độ an toàn cao. Ngay cả phụ nữ đang mang thai, cho con bú và trẻ em cũng có thể sử dụng thuốc trong trường hợp thật sự cần thiết.';
    assign = 'Có thể dùng thuốc paracetamol để giảm đau, điều trị các cơn đau do nhiều nguyên nhân khác nhau như đau nửa đầu, đau đầu do kinh nguyệt, đau bụng kinh, đau lưng, đau răng, đau nhức cơ xương khớp,… Thuốc cũng được chỉ định sử dụng để hỗ trợ giảm sốt cũng như cải thiện các cơn đau nhức do cảm cúm, cảm lạnh.';
    contraindicated = 'Paracetamol được chống chỉ định trong những trường hợp quá mẫn cảm với thuốc; suy gan, suy thận nặng; thiếu máu liên tục nhiều lần; thiếu hụt glucose-6-phosphat dehydrogenase (G6PD),… Người nghiện rượu, vừa uống rượu hoặc những người bị suy dinh dưỡng nặng, đang sử dụng thuốc có thành phần tương tác với paracetamol cũng không nên sử dụng loại thuốc giảm đau này hoặc chỉ dùng theo tư vấn chỉ định của bác sĩ.';
    ingredient = 'World History, Philosophy, Prehistoric, Culture, Ancient';
    return (

        <Box className="box-info" >
            <Box className="box-info_head" >
                <Box className="rectangle or"></Box>
                <Box className="rectangle yl"></Box>
            </Box>
            <Box className="avatar-info">
                <img src={image} alt="con pepe" style={{ width: '100%', height: '100%' }} />
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={32} lineHeight={1.5} fontFamily={"Lato"} textTransform={"capitalize"}>{name}</Typography>
            <div className="stack">
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">
                        <CalendarMonthIcon />
                    </Box>
                    <Typography color={'#303972'}>{dayOfManufacture}</Typography>
                </Box>
                <Box className='stack-info-ele' gap={1}>
                    <Box className="icon-info-ele">
                        <CalendarMonthIcon />
                    </Box>
                    <Typography color={'#303972'}>{expiry}</Typography>
                </Box>
                <Box className='stack-info-ele' gap={1} >
                    <Box className="icon-info-ele">
                        <AllInboxIcon />
                    </Box>
                    <Typography color={'#303972'}>{amount}</Typography>
                </Box>
            </div>
            <Box display={'flex'} justifyContent={'start'} alignItems={'center'} sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} gap={'15%'}>
                <Box display={'flex'} alignItems={'baseline'} justifyContent={'start'} >
                    <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"} whiteSpace={'nowrap'} padding={0}>Giá nhập:</Typography>
                    <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                        {importPrice}
                    </Typography>
                </Box>
                <Box display={'flex'} alignItems={'baseline'} justifyContent={'start'}>
                    <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"} whiteSpace={'nowrap'}>Giá bán:</Typography>
                    <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>
                        {price}
                    </Typography>
                </Box>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} marginTop={1} fontFamily={"Lato"}>Công dụng:</Typography>
            <Box className="paragraph-congdung">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{uses}</Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Chỉ định:</Typography>
            <Box className="paragraph-chidinh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{assign}</Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Chống chỉ định:</Typography>
            <Box className="paragraph-chongchidinh">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'}>{contraindicated}</Typography>
            </Box>
            <Typography className="title-info_typo" fontWeight={900} fontSize={24} fontFamily={"Lato"}>Thành phần:</Typography>
            <Box className="paragraph-thanhphan">
                <Typography align="justify" sx={{ paddingLeft: '3.5%', paddingRight: '3.5%' }} fontSize={23} fontWeight={400} fontFamily={"Lato"} color={'#303972'} marginBottom={3}>{ingredient}</Typography>
            </Box>
        </Box>

    );
};

export default MedicineInfo;