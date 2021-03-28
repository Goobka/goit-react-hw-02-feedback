import { Component } from 'react';
import PropTypes from 'prop-types';
import StatisticsItems from './StatisticsItem';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
  render() {
    return (
      <ul>
        {Object.entries(this.props).map(entry =>
          <StatisticsItems text={entry[0]} value={entry[1]}/>
        )}
      </ul>
    )
  }
}

export default Statistics;