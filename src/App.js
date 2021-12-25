import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx'

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="
        f44768d5-095c-4097-bf4f-30906a2e7ff8"
        userName="ayborg"
        userSecret="C.Typist!01"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps } />}
        onNewMessage = { () => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}

      />
    </div>
  );
}
export default App;
