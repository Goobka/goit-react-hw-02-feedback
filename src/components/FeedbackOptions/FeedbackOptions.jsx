import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

  render() {
    const { options } = this.props;
    const {onLeaveFeedback} = this.props;
    return (
      <>
        {Object.keys(options).map((key) => (
          <button
            type="button"
            name={key}
            key={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        ))}
      </>
    )
  }
}

export default FeedbackOptions;