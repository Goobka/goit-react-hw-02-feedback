import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { children, title } = this.props;
    return (
      <section className={styles.section}>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }
}

export default Section;