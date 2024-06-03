import React from "react";
import { Outlet } from "react-router-dom";

interface MembersLayoutProps {}

const MembersLayout: React.FC<MembersLayoutProps> = () => {
  // const navigate = useNavigate();

  // useEffect(() => navigate("members" as string, { replace: true }), [navigate]);

  return (
    <>
      <section className="flex justify-center h-screen">
        <Outlet />
      </section>
    </>
  );
};

export default MembersLayout;
