import Image from 'next/image';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { User } from '@prisma/client';
// import { authFullUser } from 'slices/auth.slice';
// import { useAppDispatch } from 'store/hook';

const Signup = () => {
  const router = useRouter();
//   const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      country: '',
      city:'',
      phone:''
    },
    onSubmit: async (values: any, resetForm: any) => {
      console.log(values);
      const res = await axios.post('/api/user', values);
      const data :User = res.data.exists
      dispatch(authFullUser(data));
      console.log('data', data);
      router.push('/');
      resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('this input is required'),
      lastName: Yup.string().required('this input is required'),
      address: Yup.string().required('this input is required'),
      country: Yup.string().required('this input is required'),
      city: Yup.string().required('this input is required'),
      phone: Yup.string().required('this input is required')
    })
  });

  const formMapper = [
    {key:1, formValue:firstName, label:`First Name`},
    {key:2, formValue:lastName, label:`Last Name`},
  ]

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="flex items-center justify-center lg:col-span-1 md:col-span-1 ">
        <div className="h-80 ">
          <div>
            <Image
              src="/images/logo-2.png"
              alt="logo"
              width={300}
              height={100}
              objectFit="cover"
            />
          </div>
          <h1 className='font-extrabold text-[4rem] self-center'>Second Chance</h1>
          <div>
            <p className="pt-2 pb-2 text-4xl font-bold">fill form</p>
          </div>
          <div className="">
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  First name
                </label>
                    <input
                    type="string"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e John"
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    required
                    />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Last name
                </label>
                    <input
                    type="string"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e Doe"
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    required
                    />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  First name
                </label>
                    <input
                    type="string"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e John"
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    required
                    />
              </div>

              <button
                type="submit"
                className="text-white bg-gray-700 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 md:col-span-2 relative h-[110vh] hidden lg:block">
        <Image
          src="/images/signin.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Signup;
