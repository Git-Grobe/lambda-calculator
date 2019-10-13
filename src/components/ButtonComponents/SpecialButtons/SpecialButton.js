import React from "react";

export const SpecialButton = (props) => {
  const { specials } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {specials}
    </>
  );
};
