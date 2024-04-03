import '../../App.css'
import React, { useState } from "react";
import Calendar from "./calendar";

function HomePage() {
  return (
    <div className="App">
      <Calendar className="calendar"></Calendar>
    </div>
  );
}

export default HomePage;
