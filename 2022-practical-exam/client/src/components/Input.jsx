import PropTypes from "prop-types";

export const Input = ({ type, id, placeholder, value,defaultInputValue, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      className="w-full px-6 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-gray text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
				defaultValue={defaultInputValue}

    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultInputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
