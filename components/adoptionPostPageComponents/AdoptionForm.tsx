import React from 'react'
import { useUser } from '@supabase/supabase-auth-helpers/react';
import * as Yup from 'yup';
import { AdoptionRequestFormValues } from 'types';
import { Formik, Form, Field } from 'formik'

const AdoptionForm:React.FC = () => {

  const { user } = useUser();

  const initialValues =  {
    petName: '',
    breed: '',
    story: '',
    traits:'',
    requirements: '',
    gender: '',
    species:'',
    dateOfBirth:'',
    images:[]
  }

  //yup library
  const validationSchema = Yup.object({
    petName: Yup.string().required('this input is required'),
    breed: Yup.string().required('this input is required'),
    story: Yup.string().required('this input is required'),
    traits: Yup.string().required('this input is required'),
    requirements: Yup.string().required('this input is required'),
    gender: Yup.string().required('this input is required'),
    species: Yup.string().required('this input is required'),
    dateOfBirth: Yup.string().required('this input is required'),
    images: Yup.array().of(Yup.string()).required('this input is not required').nullable()
  })

  const onSubmit = async (values: AdoptionRequestFormValues, resetForm: any) => {
    console.log(values);
    //send the req.body to the backend to create an animal in the db
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field>
          
        </Field>
      </Form>
    </Formik>
  )
}

export default AdoptionForm