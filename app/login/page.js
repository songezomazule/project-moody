import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export const metadata = {
  title: "Moody · login",
};

export default function LoginPage() {
  let children = <Login/>
  
  return <Main>{children}</Main>;
}

