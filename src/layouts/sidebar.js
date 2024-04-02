import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, colors, styled, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ConstructionIcon from "@mui/icons-material/Construction";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import '../App.css'
import { click } from "@testing-library/user-event/dist/click";
import Content from "./content";

const Side = styled(Box)({
  width: "290px",
  color: "#fff",
  margin: "36px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "flex-start", // Căn trên cùng
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const Logo = styled(Box)({
  width: "50px",
  height: "50px",
  backgroundColor: "#fb7d5b",
  borderRadius: "20px", // Bo góc để tạo hình tròn
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "10px",
});

const LogoText = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  color: "#fff",
});
const LinkItem = styled(Link)(
  ({ active }) => ({
    textDecoration: "none",
    color: active ? "purple" : "#C1BBEB",
    backgroundColor: active ? "white" : "transparent",
    width: active ? "300px" : "290px",
    boxShadow: active ? "rgba(50, 50, 93, 0.25) 0px 50px 100px - 20px, rgba(0, 0, 0, 0.3) 0px 30px 60px - 30px" : "none",
    border: active ? "2px outset #C1BBEB" : "0",
    fontSize: "18px",
    fontWeight: '500',
    margin: "5px 0",
    display: "flex",
    alignItems: "center",
    borderRadius: "30px 5px 5px 30px",
    padding: "16px 24px",
    zIndex: '10',
  })
);

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Side>
      <LogoContainer>
        <Logo>
          <LogoText>H</LogoText>
        </Logo>
        <Typography variant="h4" style={{ lineHeight: '54px', fontWeight: '700', fontSize: '36px' }}>
          HOSPITAL
        </Typography>
      </LogoContainer>
      <LinkItem to="/" active={pathname === "/"} id="home">
        <HomeIcon style={{ marginRight: "5px" }} />
        Trang chủ
      </LinkItem>
      <LinkItem to="/manage-patients" active={pathname === "/manage-patients" | pathname === "/add-patient"} id="patients">
        <Diversity1Icon style={{ marginRight: "5px" }} />
        Quản lý bệnh nhân
      </LinkItem>
      <LinkItem to="/manage-medicines" active={pathname === "/manage-medicines" | pathname === "/add-medicine" | pathname === "/info-medicine"} id="medicines">
        <VaccinesIcon style={{ marginRight: "5px" }} />
        Quản lý thuốc
      </LinkItem>
      <LinkItem to="/manage-employees" active={pathname === "/manage-employees" | pathname === "/add-employee"} id="employees">
        <BadgeIcon style={{ marginRight: "5px" }} />
        Quản lý nhân viên
      </LinkItem>
      <LinkItem to="/manage-devices" active={pathname === "/manage-devices" | pathname === "/add-device"} id="devices">
        <ConstructionIcon style={{ marginRight: "5px" }} />
        Quản lý thiết bị
      </LinkItem>
      <LinkItem to="/manage-preventions" active={pathname === "/manage-preventions"} id="preventions">
        <LocalHotelIcon style={{ marginRight: "5px" }} />
        Quản lý phòng bệnh
      </LinkItem>
      <LinkItem to="/admin" active={pathname === "/admin"} id="admin">
        <PersonIcon style={{ marginRight: "5px" }} />
        Admin
      </LinkItem>
    </Side>
  );
};

export default Sidebar;