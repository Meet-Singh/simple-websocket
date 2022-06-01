import { NO_MESSAGES } from "../../constants";

import "./style.css";

interface DisplayMessagesProps {
  receivedMessages: Array<string>;
}

export const DisplayMessages = ({ receivedMessages }: DisplayMessagesProps) => {
  return (
    <div className="display-wrapper">
      {receivedMessages && receivedMessages.length > 0 ? (
        receivedMessages.map((receivedMessage, index) => (
          <span key={index} className="display-span">
            {receivedMessage}
          </span>
        ))
      ) : (
        <span className="display-span">{NO_MESSAGES}</span>
      )}
    </div>
  );
};
