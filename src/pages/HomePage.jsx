import Daily from "../component/Daily/Daily";
import React from "react";

const HomePage = (props) => {
  return (
    <>
      <h1 className="title">내 일주일은???</h1>
      <div className="contents">
        <Daily days={props.days} onSelect={props.onSelect}></Daily>
      </div>
    </>
  );
};

export default HomePage;
