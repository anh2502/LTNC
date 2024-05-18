import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions';

const Navbar = ({ namePage }) => {
  const dispatch = useDispatch();
  const acc = useSelector(state => {
    if (state.auth.userData) {
        return state.auth.userData;
    }
    return null;
});
  const name = acc.name;
  console.log(acc)
  const handleLogout = () => {
    // Dispatch action đăng xuất khi người dùng click vào nút đăng xuất
    localStorage.removeItem("token");
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    dispatch(logout());
  };
  return (
    <div className="header-title">

      <AppBar position="static" style={{ backgroundColor: "#f3f4ff", padding: "30px 0 10px", boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h4" component="div" fontFamily={"Lato"} sx={{ flexGrow: 1, color: "#303972", lineHeight: '54px', fontWeight: '700', paddingLeft: '2%' }}>
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
                {name}
              </Typography>
            </div>
            <Avatar alt="User Avatar" />
            <Button onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{color: "#4d44b5"}} /></Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
