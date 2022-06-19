import { useState } from "react";
import Header from './Header'
import Footer from './Footer'

type props = {
    children: React.ReactNode;
};
  
const Layout:React.FC<props> = ({children}) => {
  //the mobile drawer state -- will go to the header component
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full min-h-screen p-0 m-0">
        <header className="fixed w-full">
            <Header/>
        </header>
        <main className="">
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout