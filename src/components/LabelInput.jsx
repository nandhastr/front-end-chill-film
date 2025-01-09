/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

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
