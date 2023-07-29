const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="block px-5 py-3 font-semibold text-white max-w-1/3 bg-fe-orange rounded-xl"
    >
      {children}
    </button>
  );
};

export default Button;
