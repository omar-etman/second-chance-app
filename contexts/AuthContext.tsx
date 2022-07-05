import React, { createContext, useContext } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext<AuthContextType | null>(null);

const { Provider } = AuthContext;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within a SocketProvider");
  }
  return context;
};

type AuthContextType = {
  authState: {
    token: string;
  };
  setAuthState: React.Dispatch<
    React.SetStateAction<{
      token: string;
    }>
  >;
  isUserAuthenticated: () => boolean;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
  });

  const setUserAuthInfo = ({ data }: { data: { data: string } }) => {
    localStorage.setItem("token", data.data);

    setAuthState({
      token: data.data,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    console.log(authState.token)
    return true; // TODO: check this out
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo: any) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
