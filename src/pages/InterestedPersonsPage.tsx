import Search from "@/components/Search";
import React from "react";
import { Link } from "react-router-dom";

interface InterestedPersonsPageProps {}

const InterestedPersonsPage: React.FC<InterestedPersonsPageProps> = () => {
  function handleSearchButtonClick() {
    console.log("Search button clicked!");
  }

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <Search
        placeholder="Suche Interssenten..."
        onSearch={handleSearchButtonClick}
      />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl">Welcome to the interested persons page</h1>
        <p>
          Go to the{" "}
          <Link className="text-foreground underline" to="/members">
            the members page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InterestedPersonsPage;
