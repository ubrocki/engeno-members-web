import Search from "@/components/Search";
import React from "react";
import { Link } from "react-router-dom";

interface InterestedPersonsPageProps {}

const InterestedPersonsPage: React.FC<InterestedPersonsPageProps> = () => {
  function handleSearchButtonClick() {
    console.log("Search button clicked!");
  }

  function handleReset() {
    console.log("Reset button clicked!");
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Search
        placeholder="Suche Interssenten..."
        initialSearchTerm=""
        onSearch={handleSearchButtonClick}
        onReset={handleReset}
      />
      <div className="flex flex-col items-center flex-grow mt-4">
        <h1 className="text-2xl">Willkommen auf der Interessentenübersicht.</h1>
        <p>
          Zur{" "}
          <Link className="text-foreground underline" to="/members">
            Mitgliederübersicht
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InterestedPersonsPage;
