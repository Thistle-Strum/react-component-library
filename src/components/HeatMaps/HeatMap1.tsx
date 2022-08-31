import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function randNumber() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) * 1);
}

const data = [
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
  { Frequency: randNumber() },
];

const HeatMap1 = () => {
  const chart = useRef<SVGSVGElement | null>(null);
  const dimensions = {
    width: 645,
    height: 643,
    margin: { top: 5, left: 0, bottom: 0, right: 0 },
    padding: { top: 100, left: 0, bottom: 10, right: 5 },
  };

  const rectSize = 25;

  function assignColor(d: number) {
    if (d <= 100 && d > 80) return "#1FD512";
    if (d <= 79 && d > 60) return "#1CB711";
    if (d <= 59 && d > 40) return "#18990F";
    if (d <= 39 && d > 20) return "#167D0E";
    if (d <= 19 && d > 1) return "#13620A";
    else return "#FF3E35";
  }

  useEffect(() => {
    const svg = d3
      .select(chart.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .style("background-color", "none");

    const x = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, dimensions.width]);

    data.forEach((instance, i) => {
      svg
        .append("g")
        .selectAll("rect")
        .data(instance.Frequency)
        .join("rect")
        .attr("x", x(i) + dimensions.margin.left)
        .attr("y", (d, j) => j * (rectSize + 7) + dimensions.margin.top)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("width", rectSize)
        .attr("height", rectSize)
        .attr("fill", (d) => assignColor(d));
    });
  }, []);

  return (
    <div className="">
      <svg className="" ref={chart}></svg>
    </div>
  );
};

export default HeatMap1;
