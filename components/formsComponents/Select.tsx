import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './TextError'
import { FormFieldProps, Option } from 'types'

const Select:React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options?.map((option: Option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select