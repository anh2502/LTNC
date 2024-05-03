import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, MenuItem, Select, Typography } from '@mui/material';
import { styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddCalendar from './add-calendar';
import Application from './application';
import api from "../../api";

import { useSelector } from 'react-redux';

const LinkAdd = styled(Link)({
  textDecoration: 'none',
});

const Calendar = () => {
  const isLoggedIn = useSelector(state => {
    if (state.auth.userData) {
      return state.auth.userData.userId;
    }
    return null; // hoặc giá trị mặc định phù hợp với ứng dụng của bạn
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [openAddCalendarDialog, setOpenAddCalendarDialog] = useState(false);
  const [openApplicationDialog, setOpenApplicationDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetchEvents();
  }, [currentMonth, currentYear]);

  const fetchEvents = async () => {
    try {
      const response = await api.get(`tasks/?employeeId=${isLoggedIn}&month=4`);
      const eventData = {};
      response.data.data.forEach(event => {
        const dateKey = event.startTime.split('T')[0];
        eventData[dateKey] = {
          name: event.employeeName,
          description: event.description
        };
      });
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setCurrentYear(e.target.value);
  };

  const handleAddCalendarClick = (row) => {
    setSelectedRow(row);
    setOpenAddCalendarDialog(true);
  };

  const handleAddCalendarDialogClose = () => {
    fetchEvents()
    setOpenAddCalendarDialog(false);
  };

  const handleApplicationClick = (row) => {
    setSelectedRow(row);
    setOpenApplicationDialog(true);
  };

  const handleApplicationDialogClose = () => {
    setOpenApplicationDialog(false);
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    let dayreal = 1;
    let days = [];
    for (let day = 1; (day <= 35); day++) {
      const dateKey = `${currentYear}-${(currentMonth).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const day_of_week = new Date(currentYear, currentMonth - 1, 1).getDay();
      const dayNow = new Date().getDate();
      const monthNow = new Date().getMonth() + 1;
      const yearNow = new Date().getFullYear();
      const event = events[dateKey];
      let crm = currentMonth;
      let cry = currentYear;
      if (dayreal > daysInMonth) {
        dayreal = 1;
        if (crm + 1 > 12) {
          cry++;
          crm = 1;
        }
        crm++;
      }
      const now = ((dayNow == dayreal && crm == monthNow && cry == yearNow) || (monthNow - 1 == crm && day > daysInLastMonth && dayNow == dayreal && yearNow == cry));
      days.push(
        <div key={dateKey} className={`day-db ${event ? 'has-event' : ''} ${now ? 'now' : ''}`}>
          {
            (day_of_week - day >= 0) ? (daysInLastMonth - (day_of_week - day)) : (dayreal++)
          }
          {event && (
            <div className="event-details">
              <Typography variant="body2" component="p">{event.description}</Typography>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="calendar" style={{ marginLeft: '3%', marginRight: 'auto' }} >
        <div className="header">
          <div style={{ width: 'auto', height: '100%', marginLeft: 5, color: '#303972', fontSize: 36, fontFamily: 'Lato', fontWeight: '700', wordWrap: 'break-word' }}>Calendar</div>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <Select value={currentMonth} onChange={handleMonthChange}
              style={{
                width: '207px',
                borderRadius: 40,
                border: '2px #4D44B5 solid',
                textAlign: 'center',
              }}>
              {[...Array(12)].map((_, index) => (
                <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
              ))}
            </Select>
            <Select value={currentYear} onChange={handleYearChange}
              style={{
                width: '207px',
                height: '100%',
                borderRadius: 40,
                border: '2px #4D44B5 solid',
                textAlign: 'center',
              }}>
              {[...Array(10)].map((_, i) => {
                const yearOption = currentYear - 2 + i; // 2 years back and forward
                return <MenuItem key={yearOption} value={yearOption}>{yearOption}</MenuItem>;
              })}
            </Select>
            <div style={{ borderRadius: '40px', overflow: 'hidden', height: '100%' }}>
              <Button onClick={() => handleAddCalendarClick()} className="xinnghi" style={{ backgroundColor: "#4d44b5", color: 'white', textTransform: 'none', fontWeight: '700', fontSize: '18px' }} startIcon={<AddIcon></AddIcon>}>Thêm</Button>
            </div>
          </div>
        </div>
        <div className="weekdays">
          {
            ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'].map((dayName, index) => (
              <div key={index} className="weekday">{dayName}</div>
            ))
          }
        </div>
        <div className="days-grid">
          {renderDays()}
        </div>
      </div>
      <div style={{ borderRadius: '50%', alignSelf: 'start', overflow: 'hidden' }}>
        <Button className="xinnghi" title="Đơn xin nghỉ" onClick={() => handleApplicationClick()} style={{ backgroundColor: "#4d44b5", color: 'white', textTransform: 'none', fontWeight: '700', width: '60px', }} startIcon={<i style={{ marginLeft: '19px' }} class="fa-solid fa-file-pen"></i>}></Button>
      </div>
      <Application open={openApplicationDialog} onClose={handleApplicationDialogClose} deviceInfo={selectedRow} />
      <AddCalendar open={openAddCalendarDialog} onClose={handleAddCalendarDialogClose} deviceInfo={selectedRow} />
    </div>
  );
};

export default Calendar;
