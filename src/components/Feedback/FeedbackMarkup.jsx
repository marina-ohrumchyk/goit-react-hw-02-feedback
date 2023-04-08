import React from 'react';
import css from 'components/Feedback/Feedback.module.css';

const FeedbackMarkup = ({ clickGood, clickNeutral, clickBad }) => (
  <div className={css.feedback}>
    <h2 className={css.title}>Pleace leave feedback</h2>
    <ul className={css.list}>
      <li>
        <button className={css.button} type="button" onClick={clickGood}>
          Good
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={clickNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={clickBad}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);
export default FeedbackMarkup;
