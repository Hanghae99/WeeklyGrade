import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Detail.css";

const Detail = (props) => {
  const navigate = useNavigate();
  const [grade, setGrade] = useState(-1);

  return (
    <>
      <div className="border-box">
        <h1 className="grade">
          <span className="today">{props.selectedDay}</span> 평점남기기
        </h1>

        <li className="checkLine">
          {Array.from({ length: 5 }, (item, idx) => (
            <div
              className={idx <= grade ? "checkGrade" : "uncheckGrade"}
              key={idx}
              onClick={() => setGrade(idx)}
            ></div>
          ))}
        </li>
        <button
          className="button"
          onClick={() => {
            navigate("/");
            alert("등록완료 💖");
          }}
        >
          평점남기기!
        </button>
      </div>
    </>
  );
};

export default Detail;
