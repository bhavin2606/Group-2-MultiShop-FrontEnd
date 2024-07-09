import React from "react";

export default function RatingIntegration({ star = 0 }) {
  // console.log("star", star);
  if (star?.isInteger) {
    // star
    // [1,2,3]
    // console.log("Integer");
  } else {
    // [1,2,0.5]
    // console.log("Non-Integer");

  }
  const filledArray = Array(star).fill(0);
  // [1,2,3,0.5]
  const halfFilledArray = [1];
  const NonFilled = Array(5 - star).fill(0);

  return (
    <div>
      {filledArray.map((filled, index) => {
        return <small className="fas fa-star text-primary mr-1" key={index} />;
      })}

      {NonFilled.map((filled, index) => {
        return <small className="far fa-star text-primary mr-1" key={index} />;
      })}
    </div>
  );
}
