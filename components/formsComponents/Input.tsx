import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './TextError'
import { FormFieldProps } from 'types'

const Input:React.FC<FormFieldProps> = ({ label, name, ...rest }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <label 
        htmlFor={name}
        className='text-left text-gray-100'
      >
        {label}
      </label>
      <Field id={name} name={name} {...rest}  className='w-full mx-3'/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input