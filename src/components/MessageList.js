import React, { PropTypes } from 'react';
import Message from './Message';

const MessageList = ({ className, messages }) => (

      <main className={className}>
        {messages.map(msg =>
          <Message
            key={'msg-' + msg.id}
            username={msg.username}
            content={msg.content}
            type={msg.type || 'chat'}
          />
        )}
      </main>
)

    console.log("render <MessageList />");
    let messageList = this.props.messages.map(msg => {
      return (
        <Message  key={'msg-' + msg.id}
                  username={msg.username}
                  content={msg.content}
                  type={msg.type || 'chat'} />
        );
    });

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default MessageList;
