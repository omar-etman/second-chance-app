import { Field, ErrorMessage, FieldProps } from "formik";
import TextError from "./TextError";
import DateView from "react-datepicker";
import { FormFieldProps } from "types";
import "react-datepicker/dist/react-datepicker.css";
const DatePicker: React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-100 "
      >
        {label}
      </label>
      <Field
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-900"
      >
        {({ form, field }: { form: any; field: any }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              className='text-gray-900'
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default DatePicker;
