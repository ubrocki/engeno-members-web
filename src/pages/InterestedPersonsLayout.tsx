import React from "react";
import { Outlet } from "react-router-dom";

interface InterestedPersonsLayoutProps {}

const InterestedPersonsLayout: React.FC<InterestedPersonsLayoutProps> = () => {
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

export default InterestedPersonsLayout;
