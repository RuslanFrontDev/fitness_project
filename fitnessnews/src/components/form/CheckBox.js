import { ErrorMessage, useField } from "formik";
import React from "react";
import { BsCheck } from "react-icons/bs";
import classNames from "classnames";
const CheckBox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <div
        className={classNames({
          "flex gap-x-2 cursor-pointer h-10 pt-6 text-sm items-center": true,
          "border-gray-300": !field.value ?? (!meta.error || !meta.touched ),
          "border-red-600 ": field.value && meta.error,
          "border-blue-600 ": field.value,
        })}
      >
        <button
          type="button"
          onClick={() => {
            helpers.setValue(!field.value);
          }}
          className="w-5 h-5 rounded border"
        >
          <BsCheck
            className={classNames({
              "p-0 text-lg ": true,
              "hidden ": !field.value,
              "block bg-blue-800 rounded": field.value,
            })}
          />
        </button>
        {label}
      </div>
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </>
  );
};

export default CheckBox;
