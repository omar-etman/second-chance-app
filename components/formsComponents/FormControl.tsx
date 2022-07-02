import { OptionUnstyled } from '@mui/base'
import { values } from 'lodash'
import React from 'react'
import { FormControlProps } from 'types'
import DatePicker from './DatePicker'
import ImageInput from './ImageInput'
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
      case 'imageUpload':
        return <ImageInput {...rest}/>
      case 'date':
        return <DatePicker {...rest} />
      default:
        return null
  }
}

export default FormControl