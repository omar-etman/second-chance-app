import React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import TextError from "./TextError";
import { FormFieldProps, Option } from "types";

const Select: React.FC<FormFieldProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-100 "
      >
        {label}
      </label>
      <Field as="select" id={name} name={name} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-700 focus:border-teal-700 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-700 dark:focus:border-teal-700">
        {options?.map((option: Option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Select;
