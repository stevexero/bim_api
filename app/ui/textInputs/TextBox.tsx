interface TextBoxProps {
  label?: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function TextBox({
  label = '',
  name = '',
  id = '',
  type = 'text',
  placeholder = '',
  required = false,
  className = '',
}: TextBoxProps) {
  return (
    <>
      <label className='text-sm -mb-2 text-gray-300' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        aria-required={required}
        className={`text-black rounded-lg bg-gray-200 p-2 mb-2 focus:outline-cyan-500 active:outline-cyan-500 ${className}`}
        placeholder={placeholder}
      />
    </>
  );
}
