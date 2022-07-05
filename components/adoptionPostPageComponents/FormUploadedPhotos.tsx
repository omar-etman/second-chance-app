/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from "react";
import { XIcon } from "@heroicons/react/outline";
type props = {
  photos: string[];
  setPhotos: Dispatch<SetStateAction<string[]>>;
};
const FormUploadedPhotos: React.FC<props> = ({ photos, setPhotos }) => {
  const removePhoto = (photo: string) => {
    setPhotos(photos.filter((p) => p !== photo));
  };

  return (
    <ul
      role="list"
      className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {photos.map((photo: string) => (
        <li key={photo} className="relative" onClick={() => removePhoto(photo)}>
          <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
            <XIcon className="absolute z-20 w-3 h-3 m-1" aria-hidden="true" />
            <img
              src={photo}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
            <p className="sr-only">{`photo ${photos.indexOf(photo) + 1}`}</p>
          </div>
          <p className="block text-sm font-medium text-[#10ABB4] truncate pointer-events-none">
            {photo}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FormUploadedPhotos;
