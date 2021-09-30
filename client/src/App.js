import './App.css';

import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import { ChannelContainer, ChannelListContainer , Auth } from './components';
import {} from "dotenv/config"

const cookies = new Cookies()

const apiKey = process.env.REACT_APP_STREAM_API_KEY
const authToken = cookies.get("token")

const chatClient = StreamChat.getInstance(apiKey);

if(authToken){
  chatClient.connectUser({
      id:cookies.get('userId'),
      name:cookies.get('username'),
      fullName:cookies.get('fullName'),
      phoneNumber:cookies.get('phoneNumber'),
      image:cookies.get('avataURL'),
      hashedPassword:cookies.get('hashedPassword'),
  },authToken)
}



function App() {

  if(!authToken){
    return <Auth/>
  }

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
