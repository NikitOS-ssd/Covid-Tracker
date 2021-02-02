import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { Line, Bar } from "react-chartjs-2";

const Charts = (props) => {
  const { confirmed, recovered, deaths, lastUpdate } = props.state;

  const lineChart = confirmed && (
    <Line
      data={{
        labels: lastUpdate,
        datasets: [
          {
            data: confirmed,
            label: "Infected",
            borderColor: "#509aff",
            fill: true,
          },
          {
            data: deaths,
            label: "Deaths",
            borderColor: "#000000",
            backgroundColor: "rgba(255, 0, 0, 0.4)",
            fill: true,
          },
        ],
      }}
    />
  );

  const barElem = confirmed && (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(255, 0, 0, 0.4)",
              "rgba(0, 255, 0, 0.4)",
              "rgba(0, 0, 0, 0.4)",
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          },
        ],
      }}
    />
  );

  console.log(props.state);
  console.log(props)

  return (
    <div className="charts-block">
      {props.step}

      {/* {lineChart} */}
      {props.country}
      {barElem}
    </div>
  );
};

function mapStateToProps(state) {
  return state.rootReducer;
}

export default connect(mapStateToProps, null)(Charts);
