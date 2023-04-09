import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
import Statistics from 'components/Statistics/Statistics';
import FeedbackMarkup from 'components/Feedback/FeedbackMarkup';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    visible: false,
  };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      total: prevState.total + 1,
      visible: true,
    }));
  };
  getPositivePercentage = () => {
    const { good, total } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad, total, visible } = this.state;
    return (
      <div className={css.container}>
        <FeedbackMarkup
          clickGood={() => this.handleClick('good')}
          clickNeutral={() => this.handleClick('neutral')}
          clickBad={() => this.handleClick('bad')}
        />
        <h2 className={css.title}>Statictic</h2>
        {visible ? (
          <Statistics
            upGood={good}
            upNeutral={neutral}
            upBad={bad}
            upTotal={total}
            upInterest={this.getPositivePercentage()}
          />
        ) : (
          `No feedback given`
        )}
      </div>
    );
  }
}

export default Feedback;
