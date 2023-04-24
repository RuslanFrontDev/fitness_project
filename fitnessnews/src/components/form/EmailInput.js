import React from "react";
import { ErrorMessage, useField } from "formik";
import classNames from "classnames";
const EmailInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600">{label}</div>
      <input className={classNames({
        "bg-transparent  w-full h-10 border-b outline-none":true,
        "focus:border-black":!meta.error || !meta.touched,
        "focus:border-red-500":meta.error && meta.touched
      })} {...field} {...props} />
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600"/>
    </label>
  );
};

export default EmailInput;
