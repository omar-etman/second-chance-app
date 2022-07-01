import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormFieldProps } from "types";

const Input: React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-100 "
      >
        {label}
      </label>
      <Field id={name} name={name} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-900" />
      <ErrorMessage component={TextError} name={name} className='flex flex-row items-center justify-between text-[0.6rem]'/>
    </div>
  );
};

export default Input;