import React from "react";
const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return <li key={i}>{formErrors[fieldName]} </li>;
      } else {
        return "";
      }
    })}
  </div>
);

export default FormErrors;
