import { Feedback } from 'components/Feedback/Feedback';
import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackMarkup } from 'components/Feedback/FeedbackMarkup';
import { Container } from 'components/App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback() {
    let total = 0;
    for (let key in this.state) total += this.state[key];
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total > 0) return Math.round((this.state.good / total) * 100, 0);
  }

  onLeaveFeedback = event => {
    const feedback = event.target.name;

    this.setState(oldState => ({
      [feedback]: oldState[feedback] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feadback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></Feedback>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <FeedbackMarkup message="There is no feedback"></FeedbackMarkup>
          )}
        </Section>
      </Container>
    );
  }
}
