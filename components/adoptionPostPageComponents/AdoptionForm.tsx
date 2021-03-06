import * as Yup from "yup";
import { AdoptionRequestFormValues } from "types";
import { Formik, Form, useFormik } from "formik";
import { formFields } from "utils/adoptionFormArray";
import FormControl from "components/formsComponents/FormControl";
import { useState } from "react";
import axios from "axios";
import { dateFormat } from "utils/dateFormats";

const AdoptionForm: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const initialValues = {
    petName: "",
    breed: "",
    story: "",
    traits: "",
    requirements: "",
    gender: "",
    species: "",
    dateOfBirth: "",
    images: [],
  };

  type ValueTypes = keyof typeof initialValues;

  const validationSchema = Yup.object({
    petName: Yup.string().required("this input is required"),
    breed: Yup.string().required("this input is required"),
    story: Yup.string().required("this input is required"),
    traits: Yup.string().required("this input is required"),
    requirements: Yup.string().required("this input is required"),
    gender: Yup.string().required("this input is required"),
    species: Yup.string().required("this input is required"),
    dateOfBirth: Yup.string().required("this input is required"),
    images: Yup.array().of(Yup.string()).required("this input is required"),
  });

  const onSubmit = async (
    values: AdoptionRequestFormValues,
    resetForm: any
  ) => {

    const {
      petName: name,
      species,
      breed,
      gender,
      story,
      traits,
      requirements,
    } = values;
    const dateOfBirth = dateFormat(values.dateOfBirth, "yyyy-mm-dd hh:mn:ss");
    const photos = images;
    console.log({name,
      photos,
      species,
      breed,
      dateOfBirth,
      story,
      traits,
      requirements,
      gender,})
    try {
      const res = await axios.post(`/api/animals`, {
        name,
        photos,
        species,
        breed,
        dateOfBirth,
        story,
        traits,
        requirements,
        gender,
      });
      // const data = res
      console.log("adoptionPost", res);
      resetForm();
    } catch (err) {
      console.log({ msg: "something went wrong", details: err });
    }
  };

  const formFieldMapper = () => {
    return formFields.map((fld) => (
      <FormControl
        key={fld.key}
        control={fld.control}
        type={fld.type}
        label={fld.label}
        name={fld.name}
        placeholder={fld.placeholder}
        options={fld.options}
        setFieldValue={
          fld.control === "imageUpload"
            ? (imagesToUpload: string[]) => {
                console.log({ images });
                setImages(imagesToUpload);
              }
            : undefined
        }
      />
    ));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {formFieldMapper()}
          <button
            type="submit"
            className="text-white bg-[#00939C] focus:outline-none  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700 self-center w-full mb-5 transition-all duration-200 hover:bg-[#10ABB4]"
          >
            Create Post
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AdoptionForm;
