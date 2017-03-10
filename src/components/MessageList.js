import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {

  render() {
    console.log("render <MessageList />");
    let messageList = this.props.messages.map(msg => {
      return (
        <Message  key={'msg-' + msg.id}
                  username={msg.username}
                  content={msg.content}
                  type={msg.type || 'chat'} />
        );
    });

    return (
      <main className="messages">
            {messageList}
      </main>
    );
  }
}

export default MessageList;
