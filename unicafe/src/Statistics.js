import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <table>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </table>
  );
};

export default Statistics;
