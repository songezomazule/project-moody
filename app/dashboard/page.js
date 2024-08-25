import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import React from "react";

export const metadata = {
  title: "Moody · Dashboard",
};

export default function DashboardPage() {
  let children = <Dashboard />
  
  return <Main>{children}</Main>;
}
