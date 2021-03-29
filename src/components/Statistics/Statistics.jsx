import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import StatisticsItem from '../../StatisticsItem/StatisticsItem';

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
          <StatisticsItem key={shortid.generate()} text={entry[0] === 'positivePercentage' ? 'positive feedback' : entry[0]} value={entry[1]}/>
        )}
      </ul>
    )
  }
}

export default Statistics;