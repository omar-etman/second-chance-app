import { Field, useFormikContext } from "formik";
import React, { useState } from "react";
import { FormFieldProps } from "types";
import Image from "next/image";
import { v4 as MakeId } from "uuid";
import { supabase } from "utils/supabase";
import FormUploadedPhotos from "components/adoptionPostPageComponents/FormUploadedPhotos";

const ImageInput: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  ...rest
}) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const imageUploadPlaceholder = () => {
    return (
      <>
        <svg
          className="w-12 h-12 mx-auto"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Upload a file</span>
      </>
    );
  };

  const imageUploadArea = () => {
    if (photos && photos.length > 0) {
      return (
        <div className="w-full p-2">
          <FormUploadedPhotos
            photos={photos}
            setPhotos={setPhotos}
          /> 
        </div>
      );
    } else {
      return imageUploadPlaceholder();
    }
  };

  const onPhotoUpload = async (event: React.ChangeEvent<HTMLInputElement> ) => {
    try {
      const fileListObj = event.target.files;
      if (!fileListObj) return;

      setLoading(true);
      const files = Array.from(fileListObj);

      for (let i = 0; i < files.length; i++) {
        const { data, error } = await supabase.storage
          .from("images")
          .upload(MakeId(), files[i]);

        if (error || !data) {
          console.log(error);
          continue;
        }
        const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.Key}`;
        setPhotos((prevPhotos) => [...prevPhotos, url]);
      }
      return photos
      
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-3 text-gray-100">
      <label htmlFor="cover-photo" className="block text-sm font-medium">
        {label}
      </label>
      <div className="flex flex-col items-center justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">{imageUploadArea()}</div>
        <div className="flex flex-col items-center justify-center text-sm text-gray-600">
        <span className="font-medium text-[#10ABB4] bg-none p-3 rounded-1xl flex flex-col justify-center items-center">
          {`selected images : ${photos.length}`}
        </span>
        {/* <p className="pl-1">or drag and drop</p> */}
        <p className="text-xs text-gray-300">PNG, JPG, GIF up to 10MB</p>
          <label
            htmlFor={name}
            className="relative flex flex-col items-center justify-center font-medium text-[#10ABB4] cursor-pointer hover:text-teal-700"
          >
              <span className="text-[1.1rem] mt-1">
                Browse
              </span>
              <Field
                {...rest}
                id={name}
                name={name}
                type={type}
                setFieldValue={onPhotoUpload}
                multiple
                accept=".jpg, .png, .gif"
                // onChange={onPhotoUpload}
                className="sr-only"
              /> 
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
