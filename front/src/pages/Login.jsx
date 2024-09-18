import React from "react";
import HeaderPage from "@/components/atomic/molecules/HeaderPage"
import LoginForm from "@/components/atomic/organisms/LoginForm"


const Login = () => {
  return (
    <div>

      <HeaderPage flex="flex-col"/>

      <LoginForm />

    </div>
  );
};

export default Login;

