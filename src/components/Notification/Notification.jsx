import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
  }

  render() {
    const { msg } = this.props;
    return (
      <p className={styles.msg}>{msg}</p>
    )
  }
}

export default Notification;