import Image from 'next/image';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { User } from '@prisma/client';
import { authFullUser } from 'slices/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/hook';


const Signup: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const existingUser = useAppSelector(authFullUser)
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
      const data :User = res.data.newUser
      console.log('res', res)
      console.log('data', data);
      dispatch(authFullUser(data));
      router.push('/home');
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
  console.log(authFullUser)
  const formMapper = [
    {key:1, name:'firstName',formValue:formik.values.firstName, label:`First name`, type:'string', placeholder:`i.e John`},
    {key:2, name:'lastName',formValue:formik.values.lastName, label:`Last name`, type:'string', placeholder:`i.e Doe`},
    {key:3, name:'address',formValue:formik.values.address, label:`Address`, type:'string', placeholder:`building/appartment , street name, area`},
    {key:4, name:'city',formValue:formik.values.city, label:`City`, type:'string', placeholder:`City`},
    {key:5, name:'country',formValue:formik.values.country, label:`Country`, type:'string', placeholder:`Country`},
    {key:6, name:'phone',formValue:formik.values.phone, label:`Phone number`, type:'string', placeholder:`+20 1xxxxxxxxx`},
  ]


  return (
    <div className="grid min-h-screen text-gray-100 bg-teal-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col items-center justify-center lg:col-span-1 md:col-span-1 ">
        <div className="mt-0 md:mt-[2.5rem] w-4/5">
          <div className='relative flex flex-row items-center justify-center w-full mt-5 mb-5 h-30'>
            <Image
              src="/assets/images/logo-white.png"
              alt="logo"
              width={120}
              height={120}
              objectFit="contain"
            />
          </div>
          <div>
            <p className="pt-2 pb-2 text-4xl font-bold">fill form</p>
          </div>
          <div className="mb-3">
            <form>
              {
                formMapper.map((f) => (
                  <div className="mb-6" key={f.key}>
                    <label className="block mb-2 text-sm font-medium text-gray-100 ">
                      {f.label}
                    </label>
                        <input
                        type={f.type}
                        id={f.name}
                        name={f.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={f.placeholder}
                        onBlur={formik.handleBlur}
                        value={f.formValue}
                        onChange={formik.handleChange}
                        required
                        />
                  </div>
                  
                ))
              }

              <button
                type="submit"
                className="text-white bg-[#502000] focus:outline-none  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700 self-center w-full mb-5 transition-all duration-200 hover:bg-[#9C3E00] "
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

      <div className="lg:col-span-2 md:col-span-1 relative h-[100%] hidden md:block">
        <Image
          src="/assets/images/signup-poster.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Signup;


//className="lg:col-span-2 md:col-span-1 relative h-[100%] hidden md:block bg-fixed bg-center bg-no-repeat bg-cover" style = {{backgroundImage: `url('/assets/images/signup-poster.jpg')`}}