import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const renderParts = parts.map((part) => (
    <Part key={part.name} part={part.name} exercises={part.exercises} />
  ));

  return <div>{renderParts}</div>;
};

export default Content;
