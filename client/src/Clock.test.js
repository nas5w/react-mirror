import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock/Clock";

const dateOpts = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Clock dateTime={new Date()} timeZone="us-EN" dateOpts={dateOpts} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
