import MainNavigation from "@/components/MainNavigation";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("members" as string, { replace: true }), [navigate]);

  return (
    <>
      <MainNavigation />
      <main className="flex justify-center h-screen pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
