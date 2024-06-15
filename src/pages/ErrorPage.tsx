import MainNavigation from "@/components/MainNavigation";
import React from "react";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <>
      <MainNavigation />
      <main className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1>An error occured!</h1>
          <p>Could not find this page</p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
