import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ upGood, upNeutral, upBad, upTotal, upInterest }) => (
  <div className={css.statistica}>
    <ul>
      <li className={css.item}>
        Good <span>{upGood}</span>
      </li>
      <li className={css.item}>
        Neutral <span>{upNeutral}</span>
      </li>
      <li className={css.item}>
        Bad <span>{upBad}</span>
      </li>
      <li className={css.item}>
        Total <span>{upTotal}</span>
      </li>
      <li className={css.item}>
        Positive feedback <span>{upInterest}%</span>
      </li>
    </ul>
  </div>
);
export default Statistics;