import React, {Component} from 'react';

class ChatBar extends Component {

  handleSubmit(event) {
      // key code 13
    if (event.key === 'Enter') {
      this.props.handleMySubmit(event.target.value);
      event.target.value = '';
    }
  }

  changeUser(event) {
    if (event.key === 'Enter') {
      this.props.handleUserSubmit(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    console.log("render <ChatBar />");
    return (
        <footer className="chatbar"
                onClick={this.props.handleMyCounter}
                >
          <input  className="chatbar-username"
                  placeholder="Enter name (optional)"
                  onKeyPress={this.changeUser.bind(this)}
                  defaultValue={this.props.currentUser.name}
                  />
          <input  className="chatbar-message"
                  placeholder="Type a message and hit ENTER"
                  onKeyPress={this.handleSubmit.bind(this)}
                  />
        </footer>

    );
  }
}

export default ChatBar;



