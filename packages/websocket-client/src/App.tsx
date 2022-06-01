import "./App.css";
import { WebsocketClient } from "./components/WebsocketClient";

function App() {
  return (
    <div className="App">
      <h1 className="App-heading">Welcome to Simple Websocket App</h1>
      <WebsocketClient />
    </div>
  );
}

export default App;
