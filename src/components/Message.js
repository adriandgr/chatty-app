import React, { PropTypes } from 'react';

const Message = ({ className, uuid, username, content }) => (
      <div
        className={className}
        key={'msg-' + uuid}>
        <span
          className="message-username" > {username}</span>
        <span className="message-content" > {content} </span>
      </div>
)

Message.propTypes = {
  className: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Message;
