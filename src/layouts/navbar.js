import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ({ namePage }) => {
  return (
    <div className="header-title">

      <AppBar position="static" style={{ backgroundColor: "#f3f4ff", padding: "30px 0 10px", boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#303972", lineHeight: '54px', fontWeight: '700', paddingLeft: '2%' }}>
            {namePage}
          </Typography>
          <Button component={Link} to="/" style={{ color: "gray", padding: "0px 3px", minWidth: "unset" }}>
            <NotificationsIcon style={{ width: "28px", height: "28px" }} />
          </Button>
          <Button component={Link} to="/about" style={{ color: "gray", padding: "0px 3px", minWidth: "unset" }}>
            <SettingsIcon style={{ width: "28px", height: "28px" }} />
          </Button>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
            <div style={{ textAlign: "right", marginRight: "10px", marginLeft: "5px" }}>
              <Typography variant="body1" style={{ color: "#303972", fontSize: "14px" }}>
                Tên Người Dùng
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Chức Vụ
              </Typography>
            </div>
            <Avatar alt="User Avatar" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
