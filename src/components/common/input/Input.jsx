const Input = ({ id, name, placeholder, type = 'text', ...props }) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      className='h-14 w-full rounded-lg border border-gray-200 px-4 placeholder:text-gray-300'
      {...props}
    />
  );
};

export default Input;
