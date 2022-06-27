import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './TextError'
import { FormFieldProps } from 'types'

const Input:React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input