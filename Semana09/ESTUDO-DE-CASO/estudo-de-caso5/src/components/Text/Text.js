import "./Text.css";

function Text(props) {
  const { children, fontSize, as, align } = props;
  const Component = as;

  return (
    <Component className={`font-${fontSize} text-${align}`}>
      {children}
    </Component>
  );
}

export default Text;
