// PersonalInfo.js
import React from "react";

const PersonalInfo = ({ employee }) => {
  return (
    <div className="personal-info">
      <h3>Personal Information</h3>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      {/* Add more personal information fields */}
    </div>
  );
};

export default PersonalInfo;
