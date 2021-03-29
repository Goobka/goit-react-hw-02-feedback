import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {Object.keys(options).map((key) => (
          <button
            type="button"
            name={key}
            key={shortid.generate()}
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