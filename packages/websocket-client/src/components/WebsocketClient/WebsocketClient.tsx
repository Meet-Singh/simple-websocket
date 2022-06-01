import { useEffect, useRef, useState } from "react";

import { SendResponse } from "../SendResponse";
import { WEBSOCKET_URL } from "../../constants";
import { DisplayMessages } from "../DisplayMessages";

import "./style.css";

export const WebsocketClient = () => {
  const websocket = useRef(new WebSocket(WEBSOCKET_URL));
  const [message, setMessage] = useState("");
  const [isConnectionEstablished, setIsConnectionEstablished] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState<Array<string>>([]);

  // To test if connection is established
  useEffect(() => {
    websocket.current.onopen = () => {
      console.debug("Connection Established");
      setIsConnectionEstablished(true);
    };
  }, []);

  useEffect(() => {
    websocket.current.onmessage = (msg) => {
      const { message } = JSON.parse(msg.data);
      setReceivedMessages([...receivedMessages, message]);
    };
  });

  const handleOnChange = (event: { target: { value: any } }) => {
    setMessage(event.target.value);
  };

  const onSubmit = () => {
    setMessage("");
    websocket.current.send(message);
  };

  return (
    <div className="wrapper">
      {isConnectionEstablished ? (
        <>
          <SendResponse
            message={message}
            handleOnChange={handleOnChange}
            onSubmit={onSubmit}
          />
          <DisplayMessages receivedMessages={receivedMessages} />
        </>
      ) : (
        <span className="empty-text">
          Kindly wait, your connection is establishing...
        </span>
      )}
    </div>
  );
};
