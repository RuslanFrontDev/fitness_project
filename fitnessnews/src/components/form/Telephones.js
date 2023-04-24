import React, { useState } from "react";
import { useField } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
const Telephones = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [value, setValue] = useState("");
  const phoneHandle = (value) => {
    helpers.setValue(value);
  };
  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600">{label}</div>
      <PhoneInput
        labels={en}
        value={value}
        defaultCountry="AZ"
        onChange={phoneHandle}
        className="bg-transparent w-full h-10 rounded border-b outline-none focus:border-black "
        {...props}
      />
      <small className="bg-red-200 rounded break-all">
        Bizimlə məşqlərə qoşulmaq istəsəniz telefon nömrənizi yaza bilərsiniz.
        Sizinlə əlaqə saxlanılacaq:
        {value && isPossiblePhoneNumber(value) ? "Dogru" : ""}
      </small>
    </label>
  );
};
export default Telephones;
