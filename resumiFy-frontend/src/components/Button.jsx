const Button = ({ className = 'bg-gray-700 text-white hover:bg-gray-800', text, ...rest }) => {
  return (
    <button
      className={`rounded px-4 py-2 m-2 ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;