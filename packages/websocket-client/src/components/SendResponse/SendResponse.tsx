import "./style.css";

interface SendResponseProps {
  message: string;
  handleOnChange: (event: { target: { value: any } }) => void;
  onSubmit: () => void;
}

export const SendResponse = ({
  message,
  handleOnChange,
  onSubmit,
}: SendResponseProps) => {
  return (
    <div className="response-wrapper">
      <input
        className="response-input"
        onChange={handleOnChange}
        value={message}
        placeholder="Enter text to send"
      />
      <div className="response-button-wrapper">
        <button className="response-button" onClick={onSubmit}>
          Send Message
        </button>
      </div>
    </div>
  );
};
