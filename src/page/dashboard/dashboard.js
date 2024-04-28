import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
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
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
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
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const event = events[dateKey];
      days.push(
        <div key={dateKey} className={`day-db ${event ? 'has-event' : ''}`}>
          {day}
          {event && (
            <div className="event-details">
              {/* <span className="event-name">{event.name}</span> */}
              <Typography variant="body2" component="p">{event.description}</Typography>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="calendar">
        <div className="header">
          <div style={{ width: 'auto', height: '100%', marginLeft: 5, color: '#303972', fontSize: 36, fontFamily: 'Lato', fontWeight: '700', wordWrap: 'break-word' }}>Calendar</div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '207px', height: '50%', paddingLeft: 40, paddingRight: 40, paddingTop: 9, paddingBottom: 9, marginRight: '2.2%', borderRadius: 40, border: '2px #4D44B5 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                <div style={{ color: '#4D44B5', fontSize: '18px', fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word' }}>
                  <select value={currentMonth} onChange={handleMonthChange}>
                    {[...Array(12)].map((_, index) => (
                      <option key={index} value={index}>{index + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ width: '207px', height: '50%', paddingLeft: 40, paddingRight: 40, paddingTop: 9, paddingBottom: 9, marginRight: '2.2%', borderRadius: 40, border: '2px #4D44B5 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                <div style={{ color: '#4D44B5', fontSize: 18, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word' }}>
                  <select value={currentYear} onChange={handleYearChange}>
                    {[...Array(5)].map((_, i) => {
                      const yearOption = currentYear - 2 + i; // 2 years back and forward
                      return <option key={yearOption} value={yearOption}>{yearOption}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>

            <LinkAdd onClick={() => handleAddCalendarClick()} className="add">
              <div style={{ height: '100%', width: '10px' }}><AddIcon /></div>
              <div className="content-button" style={{ height: '100%', marginLeft: '-20px', paddingTop: '5px' }}>Thêm</div>
            </LinkAdd>
          </div>
        </div>
        <div className="weekdays">
          {/* {['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'].map((dayName, index) => (
            <div key={index} className="weekday">{dayName}</div>
          ))} */}
        </div>
        <div className="days-grid">
          {renderDays()}
        </div>
      </div >
      <div style={{ paddingRight: '50px', display: 'flex', justifyContent: 'end', marginTop: '-60px' }}>
        <button onClick={() => handleApplicationClick()} className="">Xin nghỉ</button>
      </div>
      <Application open={openApplicationDialog} onClose={handleApplicationDialogClose} deviceInfo={selectedRow} />
      <AddCalendar open={openAddCalendarDialog} onClose={handleAddCalendarDialogClose} deviceInfo={selectedRow} />
    </div>
  );
};

export default Calendar;
