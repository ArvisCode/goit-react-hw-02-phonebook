import PropTypes from 'prop-types';
import css from './Message.module.css';

function Message({ text }) {
  return (
    <div>
      <p className={css.text}>{text}</p>
    </div>
  );
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};

export default Message;
