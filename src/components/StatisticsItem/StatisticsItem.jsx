import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

class StatisticsItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let { text, value} = this.props;
    text = this.capitalizeFirstLetter(text);
    return (
      <li className={styles.item}>
        <span>
          {text}:
        </span>
        <span className={styles.value}>
          {value}{text === 'Positive feedback' ? '%' : ''}
        </span>
      </li>
    )
  }
}

export default StatisticsItem;