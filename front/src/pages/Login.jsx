import React from "react";
import HeaderPage from "@/components/atomic/molecules/HeaderPage"
import LoginForm from "@/components/atomic/organisms/LoginForm"


const Login = () => {
  return (
    <div className="m-5 mb-20 mx-10">

      <HeaderPage flex="flex-col"/>

      <LoginForm />

    </div>
  );
};

export default Login;

