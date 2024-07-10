import React from "react";

export default function RatingIntegration({ star = 0 }) {
  // Round star to the nearest half-star
  const roundedStar = Math.round(star * 2) / 2;

  // Determine the number of filled stars
  const filledStars = Math.floor(roundedStar);

  // Determine if there should be a half-star
  const showHalfStar = roundedStar % 1 !== 0;

  // Fill the filled stars array
  const filledArray = Array(filledStars).fill(0);

  // Fill the half-star if necessary
  const halfFilledArray = showHalfStar ? [1] : [];

  // Fill the empty stars
  const nonFilledArray = Array(5 - filledStars - (showHalfStar ? 1 : 0)).fill(0);

  return (
    <div>
      {filledArray.map((filled, index) => (
        <small className="fas fa-star text-primary mr-1" key={index} />
      ))}

      {halfFilledArray.map((filled, index) => (
        <small className="fas fa-star-half-alt text-primary mr-1" key={index + filledArray.length} />
      ))}

      {nonFilledArray.map((filled, index) => (
        <small className="far fa-star text-primary mr-1" key={index + filledArray.length + halfFilledArray.length} />
      ))}
    </div>
  );
}
