import "./Button.css";

function Button(props) {
  const { children, variant, isLoading, disabled, colorScheme } = props;
  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant}-${colorScheme}`}
    >
      {isLoading ? "carregando..." : children}
    </button>
  );
}

export default Button;
