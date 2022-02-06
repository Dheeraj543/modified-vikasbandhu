import React from "react";

interface propType {
  data: any;
  colors: Array<any>;
}

const DataAboutList = (props: propType) => {
  const { data } = props;

  function fillLi(legend: String, value: Number, color: any) {
    return (
      <li
        style={{
          listStyle: "none",
          margin: "5px 0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: "0px",
        }}
      >
        <span
          className="data-dot"
          style={{
            backgroundColor: color,
          }}
        ></span>
        <span className="data-legend">{legend}</span>
        <span className="data-value">{value}</span>
      </li>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20px",
        marginRight: "0px",
        justifyItems: "start",
      }}
    >
      <div className="vl" style={{ alignSelf: "center", margin: "0px" }}></div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          verticalAlign: "middle",
          alignItems: "start",
          margin: "0px",
          paddingLeft: "15px",
        }}
      >
        {data &&
          data.map((item: any, index: any) =>
            fillLi(item["legend"], item["value"], props.colors[index])
          )}
      </ul>
    </div>
  );
};

export default DataAboutList;
