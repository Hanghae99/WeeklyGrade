import React from "react";
import Detail from "../component/Detail/Detail";

const DetailPage = (props) => {
  return <Detail selectedDay={props.selectedDay}></Detail>;
};

export default DetailPage;
