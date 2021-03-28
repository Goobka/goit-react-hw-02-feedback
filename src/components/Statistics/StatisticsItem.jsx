import { Component } from 'react';
import PropTypes from 'prop-types';

class StatisticsItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let { text } = this.props;
    const { value } = this.props;
    text = this.capitalizeFirstLetter(text);
    return (
      <li>{text}: {value}</li>
    )
  }
}

export default StatisticsItem;