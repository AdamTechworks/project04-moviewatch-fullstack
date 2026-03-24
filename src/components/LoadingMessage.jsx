import "./LoadingMessage.css";

function LoadingMessage({ text = "Loading..." }) {
  return <p className="loading-message">{text}</p>;
}

export default LoadingMessage;