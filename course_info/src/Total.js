import React from 'react';

const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
