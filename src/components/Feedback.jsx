import React from 'react';
import css from "components/Feedback.module.css"


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    handleGood = () => {
        this.setState(prevState => {return{
            good: prevState.good + 1
        }})
        
    }
    handleNeutral = () => {
        this.setState(prevState => {return{
            neutral: prevState.neutral + 1
        }})
    }
    handleBad = () => {
        this.setState(prevState => {return{
            bad: prevState.bad + 1
        }})
    }


    render() {
        return(
            <div>
                <p className={css.title}>Pleace leave feedback</p>
                <ul className={css.list}>
                  <li>
                    <button className={css.button} type="button" 
                    onClick={this.handleGood}
                    >
                      Good
                    </button>
                  </li>
                  <li>
                    <button className={css.button} type="button" 
                    onClick={this.handleNeutral}
                    >
                      Neutral
                    </button>
                  </li>
                  <li>
                    <button className={css.button} type="button" 
                    onClick={this.handleBad}
                    >
                      Bad
                    </button>
                  </li>
                </ul>
              </div>
              )
    }
}

export default Feedback