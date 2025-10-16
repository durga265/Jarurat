import React from 'react';
import './CardStat.css';

const CardStat = ({title, value}) => {
  return (
    <div className="card-stat">
      <div className="stat-value">{value}</div>
      <div className="stat-title">{title}</div>
    </div>
  );
};

export default CardStat;
