import React from "react";

export const NumberButton = (props) => {
  const { numbers } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {numbers}
    </>
  );
};
