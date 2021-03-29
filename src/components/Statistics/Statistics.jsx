import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

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
      <ul className={styles.list}>
        {Object.entries(this.props).map(([key, value]) => (<StatisticsItem key={shortid.generate()} text={key === 'positivePercentage' ? 'positive feedback' : key} value={value} />
        ))}
      </ul>
    )
  }
}

export default Statistics;