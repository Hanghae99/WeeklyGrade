import React from "react";
import { useNavigate } from "react-router-dom";
import "./Daily.css";

const Daily = (props) => {
  const dayList = [];
  const navigate = useNavigate();
  const makeArr = [];

  for (let i = 0; i < 7; i++) {
    makeArr.push(
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1)
    );
  }

  console.log(makeArr);

  for (let i = 0; i < props.days.length; i++) {
    let date = props.days[i];
    dayList.push(
      <li className="line" key={date.id}>
        {date.day}
        {Array.from({ length: 5 }, (item, idx) => (
          <div
            className={idx <= makeArr[i] ? "check-color" : "check"}
            key={idx}
          ></div>
        ))}

        <button
          className="btn"
          onClick={() => {
            props.onSelect(date.day);
            navigate("/detail");
          }}
        >
          ✅
        </button>
      </li>
    );
  }
  return (
    <>
      <div className="dayLine">{dayList}</div>
    </>
  );
};

export default Daily;
