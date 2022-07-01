import { useState } from "react";
import Header from './Header'
import Footer from './Footer'

type props = {
    children: React.ReactNode;
};
  
const Layout:React.FC<props> = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full p-0 m-0">
        <header className="fixed z-50 w-full bg-teal-900 shadow-xl">
            <Header/>
        </header>
        <main className="min-h-screen bg-teal-900">
            {children}
        </main>
        <footer className='bg-[#502000]'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout