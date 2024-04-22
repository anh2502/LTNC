import { Typography } from '@mui/material';
import '../../App.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddCalendar from './add-calendar';
import Application from './application';
const LinkAdd = styled(Link)({
  textDecoration: 'none',
});

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [openAddCalendarDialog, setOpenAddCalendarDialog] = useState(false);
  const [openApplicationDialog, setOpenApplicationDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [events, setEvents] = useState({
    // Assuming the format 'YYYY-MM-DD': { name: 'Event', count: number }
    '2021-01-10': { name: 'Karen', count: 2 },
    '2021-01-15': { name: 'Tony', count: 2 },
    '2021-01-29': { name: 'Johnny' },
    // More events can be added here
  });

  const calendarRow = {
    name: '',
    code: '',
    booking: '',
    date: '',
    shift: '',
  }

  const months = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  // Function to handle month change
  const handleMonthChange = (e) => {
    setCurrentMonth(months.indexOf(e.target.value));
  };

  // Function to handle year change
  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value, 10));
  };

  const handleAddCalendarClick = (row) => {
    setSelectedRow(row);
    setOpenAddCalendarDialog(true);
  };

  const handleAddCalendarDialogClose = () => {
    setOpenAddCalendarDialog(false);
  };

  const handleApplicationClick = (row) => {
    setSelectedRow(row);
    setOpenApplicationDialog(true);
  };

  const handleApplicationDialogClose = () => {
    setOpenApplicationDialog(false);
  };

  // Function to render the days of the month
  const renderDays = () => {
    // Calculate the number of days in the current month
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
              <span className="event-name">{event.name}</span>
              {event.count && <span className="event-count">{event.count}+</span>}
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
          {/* Month and Year Dropdowns */}
          <div style={{ display: 'flex' }}>
            <div style={{ width: '207px', height: '50%', paddingLeft: 40, paddingRight: 40, paddingTop: 9, paddingBottom: 9, marginRight: '2.2%', borderRadius: 40, border: '2px #4D44B5 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                <div style={{ color: '#4D44B5', fontSize: '18px', fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word' }}>
                  <select value={months[currentMonth]} onChange={handleMonthChange}>
                    {months.map((month, index) => (
                      <option key={index} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ width: '207px', height: '50%', paddingLeft: 40, paddingRight: 40, paddingTop: 9, paddingBottom: 9, marginRight: '2.2%', borderRadius: 40, border: '2px #4D44B5 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                <div style={{ color: '#4D44B5', fontSize: 18, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word' }}><select value={currentYear} onChange={handleYearChange}>
                  {[...Array(5)].map((_, i) => {
                    const yearOption = currentYear - 2 + i; // 2 years back and forward
                    return <option key={yearOption} value={yearOption}>{yearOption}</option>;
                  })}
                </select></div>
              </div>
            </div>

            <LinkAdd onClick={() => handleAddCalendarClick(calendarRow)} className="add">
              <div style={{ height: '100%', width: '10px' }}><AddIcon /></div>
              <div className="content-button" style={{ height: '100%', marginLeft: '-20px', paddingTop: '5px' }}>Thêm</div>
            </LinkAdd>
          </div>
        </div>
        <div className="weekdays">
          {/* Render Weekdays here, for example: 'Sun', 'Mon', 'Tue', etc. */}
          {['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'].map((dayName, index) => (
            <div key={index} className="weekday">{dayName}</div>
          ))}
        </div>
        <div className="days-grid">
          {renderDays()}
        </div>
      </div >
      <div style={{ paddingRight: '0px', display: 'flex', justifyContent: 'end', marginTop: '-60px' }}>
        <LinkAdd onClick={() => handleApplicationClick(calendarRow)} className="add">
          <div className="content-button" style={{ height: '100%', paddingTop: '5px', width: '6vw' }}>Đơn xin nghỉ</div>
        </LinkAdd>
      </div>
      <Application open={openApplicationDialog} onClose={handleApplicationDialogClose} deviceInfo={selectedRow} />
      <AddCalendar open={openAddCalendarDialog} onClose={handleAddCalendarDialogClose} deviceInfo={selectedRow} />
    </div>
  );
};

export default Calendar;