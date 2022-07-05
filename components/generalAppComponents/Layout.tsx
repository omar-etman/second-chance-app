import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { useRouter } from "next/router";

type props = {
  children: React.ReactNode;
  isProtected?: boolean;
};
//revisit repo
const Layout: React.FC<props> = ({ children, isProtected = true }) => {
  const { user, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log({ user, isLoading });
    if (!isLoading && !user && isProtected) router.push("/login");
  }, [user, isLoading, isProtected, router]);
  return (
    <div className="w-full p-0 m-0">
      <header className="fixed z-50 w-full bg-teal-900 shadow-xl">
        <Header />
      </header>
      <main className="min-h-screen bg-teal-900">{children}</main>
      <footer className="bg-[#502000]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
