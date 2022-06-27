import React from 'react'
import { FormControlProps } from 'types'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'

const FormControl:React.FC<FormControlProps> = (props) => {

    const {control, ...rest} = props
    switch (control) {
      case 'input':
        return <Input {...rest} />
      case 'textarea':
        return <TextArea {...rest} />
      case 'select':
        return <Select {...rest} />
      // case 'imagesInput':
      //   return <ImagesInput {...rest}/>
      case 'date':
        return <DatePicker {...rest} />
      default:
        return null
  }
}

export default FormControl