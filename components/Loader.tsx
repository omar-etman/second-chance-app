import { CircularProgress } from '@mui/material'

const Loader:React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
          <CircularProgress color="inherit" className="w-[12rem]" sx={{color:"gray"}} />
          <span className="mt-3 text-gray-100">Loading ...</span>
        </div>
  )
}

export default Loader