/* eslint-disable react/prop-types */
const LabelInput = ({htmlFor, label}) => {
  return (
      <div>
          <label htmlFor={htmlFor} className="block text-gray-700 font-semibold mb-2">
              {label}
          </label>
      </div>
  );
}

export default LabelInput
