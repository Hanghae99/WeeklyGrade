import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { useState } from "react";

function App() {
  const days = [
    { id: 1, day: "월요일" },
    { id: 2, day: "화요일" },
    { id: 3, day: "수요일" },
    { id: 4, day: "목요일" },
    { id: 5, day: "금요일" },
    { id: 6, day: "토요일" },
    { id: 7, day: "일요일" },
  ];

  const [selectedDay, setSelectedDay] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage days={days} onSelect={setSelectedDay} />}
        />
        <Route
          path="/detail"
          element={<DetailPage selectedDay={selectedDay} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
