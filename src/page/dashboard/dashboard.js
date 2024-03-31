import '../../App.css'
import React, { useState } from "react";
import Calendar from "./calendar";

function HomePage() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };

  return (
    <div className="App">
      <Calendar date={date} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
    </div>
  );
}

export default HomePage;
