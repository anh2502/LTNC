import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import NavbarAddDevice from "./navbar_add-devices";
import { styled } from "@mui/material";

const LayoutContainer = styled('div')({
  display: 'flex',
});

const SidebarContainer = styled('div')({
  width: '325px',
  backgroundColor: "#4d44b5"
});

const ContentContainer = styled('div')({
  flex: '1', // Chiếm phần còn lại của không gian
});

const LayoutAddDevice = () => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
        <NavbarAddDevice />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
    // <Sidebar/>
  );
};

export default LayoutAddDevice;
