import React from "react";

export default function RatingIntegration({ star = 0 }) {
  const filledArray = Array(star).fill(0);
  // [1,2,3,0.5]
  const halfFilledArray = [1];
  // console.log("calc ", halfFilledArray?.length + filledArray?.length);
  const NonFilled = Array(5 - star).fill(0);
  // console.log(filledArray, "filledArray");
  // console.log(halfFilledArray, "halfFilledArray");

  return (
    <div>
      {filledArray.map((filled, index) => {
        return <small className="fas fa-star text-primary mr-1" key={index}/>;
      })}
      {/* {halfFilledArray?.length > 0 && (
        <small className="fas fa-star-half-alt" />
      )} */}
      {NonFilled.map((filled, index) => {
        return <small className="far fa-star text-primary mr-1"  key={index}/>;
      })}
    </div>
  );
}

