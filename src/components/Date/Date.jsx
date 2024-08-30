import React from "react";

function CurrentDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);

  return <div>{formattedDate}</div>;
}

export default CurrentDate;
