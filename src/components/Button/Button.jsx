import "./Button.scss";

export default function Button({ className, children, successMessage }) {
  return (
    <button onClick={successMessage} className={className}>
      {children}
    </button>
  );
}
