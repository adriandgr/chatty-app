import React, {Component} from 'react';
import { createStore } from 'redux'
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList';
import Navbar from './Navbar';

const App = () => (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-users">{this.state.connectedUsers} users online</span>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar handleMyCounter={this.counter.bind(this)} handleMySubmit={this.userMessage.bind(this)} handleUserSubmit={this.userChanged.bind(this)} currentUser={this.state.currentUser}/>
      </div>
)

export default App;


 // <div>
 //        <nav className="navbar">
 //          <a href="/" className="navbar-brand">Chatty</a>
 //          <span className="navbar-users">{this.state.connectedUsers} users online</span>
 //        </nav>
 //        <MessageList messages={this.state.messages} />
 //        <ChatBar handleMyCounter={this.counter.bind(this)} handleMySubmit={this.userMessage.bind(this)} handleUserSubmit={this.userChanged.bind(this)} currentUser={this.state.currentUser}/>
 //      </div>


 //  constructor(props) {
 //    console.log("constructor <App />");
 //    super(props);
 //    this.state = {
 //      currentUser: {
 //        name : 'Anonymous'
 //      },
 //      connectedUsers: 0,
 //      messages: []
 //    };

 //    // this.counter = this.counter.bind(this)
 //    // this.store = createStore(counter);
 //  }



 //  userMessage(message){
 //    console.log('it works!');
 //    const newMessage = {
 //      id: Math.random(Date.now()),
 //      username: this.state.currentUser.name,
 //      content: message,
 //      type: 'chat'
 //    }
 //    const messages = this.state.messages.concat(newMessage);
 //    this.socket.send(JSON.stringify(newMessage));

 //    // this.store.dispatch({type: 'INCREMENT'});
 //  }

 //  userChanged(username){
 //    const payload = { name: username, oldUsername: this.state.currentUser.name };
 //    this.socket.send(JSON.stringify(payload));
 //    this.setState({ currentUser: { name: username }});

 //  }

 //  componentDidMount() {
 //    console.log("componentDidMount <App />");
 //    this.socket = new WebSocket("ws://localhost:3001");



 //    this.socket.onmessage = (event) => {
 //      let broadcast = JSON.parse(event.data);
 //      if (broadcast.action === 'CHAT') {
 //        const messages = this.state.messages.concat(broadcast);
 //        return this.setState({messages});
 //      }
 //      if (broadcast.action == 'USER-COUNT') {
 //        const connectedUsers = broadcast.number;
 //        return this.setState({connectedUsers: connectedUsers});
 //      }
 //      const sytemMessage = {
 //      username: 'ChattyBot',
 //      content: `${broadcast.oldUsername} changed to ${broadcast.name}`,
 //      type: 'SYSTEM'
 //      }
 //      this.socket.send(JSON.stringify(sytemMessage));
 //    }
 //    console.log(this.socket);



 //    this.store.subscribe(render);
 //    render();

 //  }
