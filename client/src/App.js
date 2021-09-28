import './App.css';

import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import { ChannelContainer, ChannelListContainer } from './components';
import {} from "dotenv/config"

const apiKey = process.env.REACT_APP_STREAM_API_KEY

const chatClient = StreamChat.getInstance(apiKey);

function App() {

  return (
    <div className="app__wrapper">
      <Chat client={chatClient} theme="messaging light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;