import React from "react";
import "./Calendar.css";

const Calendar = ({ date, onPrevMonth, onNextMonth }) => {
    const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

    const getNumberOfDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getDay = (date) => {
        return date.getDay();
    };

    const renderDays = () => {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        const numberOfDays = getNumberOfDaysInMonth(currentYear, currentMonth);
        const firstDay = getDay(new Date(currentYear, currentMonth, 1));

        const daysOfWeek = [];

        for (let i = 0; i < firstDay; i++) {
            daysOfWeek.push(<td key={i}></td>);
        }

        for (let i = 1; i <= numberOfDays; i++) {
            daysOfWeek.push(<td key={i}>{i}</td>);
        }

        return daysOfWeek;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={onPrevMonth}>&lt;</button>
                <span>{months[date.getMonth()]} {date.getFullYear()}</span>
                <button onClick={onNextMonth}>&gt;</button>
            </div>
            <table className="tb-calendar">
                <thead>
                    <tr>
                        {days.map((day) => (
                            <th className="th-calendar" key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr-calendar">{renderDays()}</tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;