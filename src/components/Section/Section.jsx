import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  }
  render() {
    const { children } = this.props;
    const { title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }
}

export default Section;