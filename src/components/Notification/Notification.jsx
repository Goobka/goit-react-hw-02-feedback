import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
  }

  render() {
    const { msg } = this.props;
    return (
      <p>{msg}</p>
    )
  }
}

export default Notification;