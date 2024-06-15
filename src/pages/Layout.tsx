import MainNavigation from "@/components/MainNavigation";
import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  // const navigate = useNavigate();

  // useEffect(() => navigate("members" as string, { replace: true }), [navigate]);

  return (
    <>
      <MainNavigation />
      <main className="flex w-full justify-center pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
