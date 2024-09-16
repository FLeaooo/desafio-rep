import React from "react";
import HeaderPage from "@/components/atomic/molecules/HeaderPage"
import LoginForm from "@/components/atomic/organisms/LoginForm"


const Login = () => {
  return (
    <div className="bg-white w-[60%] h-[70%] rounded-lg shadow-lg text-center">

      <HeaderPage flex="flex-col"/>

      <LoginForm />

    </div>
  );
};

export default Login;

