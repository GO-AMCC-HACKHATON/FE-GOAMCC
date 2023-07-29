const Input = ({
  type,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="w-full h-12 px-3 text-sm border-2 rounded-lg outline-none border-fe-secondary"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete=""
      />
      <p className="text-xs italic text-red-500">
        {touched && errors ? errors : null}
      </p>
    </>
  );
};

export default Input;
