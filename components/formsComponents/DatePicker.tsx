import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './TextError'
import DateView from 'react-datepicker'
import { FormFieldProps, Option } from 'types'
import 'react-datepicker/dist/react-datepicker.css'
const DatePicker:React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }:{form:any, field:any}) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default DatePicker