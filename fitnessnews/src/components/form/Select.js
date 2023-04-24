import React from "react";
import { ErrorMessage, useField } from "formik";
const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const changeHandle =(e) =>{
   let selected = options.find(option=>option.key === Number(e.target.value))
   helpers.setValue( selected || e.target.value)

  }
  return (
    <label className="block w-full  pt-6">
      <div className="text-sm text-gray-600">{label}</div>
      <select onChange={changeHandle} className=" bg-transparent w-full pt-2 rounded border-b outline-none focus:border-black" defaultValue={field.value} {...props} >
        <option value="">Secin</option>
         {options.map((option, key)=>(
            <option value={option.key} key={key}>{option.value}</option>
         ))}
      </select>
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </label>
  );
};

export default Select;
