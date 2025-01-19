export default function Button({ label, className, disabled }) {
  return (
    <button
      disabled={disabled ? disabled : false}
      className={`${className ? className : ""}`}
    >
      {label}
    </button>
  );
}
