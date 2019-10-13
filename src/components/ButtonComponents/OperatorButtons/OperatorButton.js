import React from "react";

export const OperatorButton = (props) => {
  const { operators } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operators}
    </>
  );
};
