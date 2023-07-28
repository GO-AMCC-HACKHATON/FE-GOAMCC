const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="block w-1/3 py-3 font-semibold text-white bg-fe-orange rounded-xl"
    >
      {children}
    </button>
  );
};

export default Button;
