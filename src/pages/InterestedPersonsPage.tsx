import React, { useContext } from "react";
import Search from "@/components/Search";

import { useQuery } from "@tanstack/react-query";
import SearchContext from "@/stores/SearchContext";
import { Link } from "react-router-dom";
import InterestedPersonsRepository from "@/data/InterestedPersonsRepository";
import InterestedPersonsTable from "@/components/InterestedPersonsTable";

interface InterestedPersonsPageProps {}

const InterestedPersonsPage: React.FC<InterestedPersonsPageProps> = () => {
  const searchCtx = useContext(SearchContext);

  const searchTerm = searchCtx.interestedSearchTerm;

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () =>
      searchTerm === null
        ? InterestedPersonsRepository.getInterestedPersons()
        : InterestedPersonsRepository.getInterestedPersons(searchTerm),
    queryKey: ["interested", { searchTerm: searchTerm }],
    enabled: searchTerm !== null,
  });

  function handleSearchButtonClick(searchTerm: string) {
    searchCtx.setInterestedSearchTerm(searchTerm);
  }

  function handleSearchTermReset() {
    searchCtx.resetInterestedSearchTerm();
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const interestedAvailable = data && data.length > 0;

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Search
        placeholder="Suche Interessenten..."
        initialSearchTerm={searchTerm}
        onSearch={handleSearchButtonClick}
        onReset={handleSearchTermReset}
      />
      <Link
        to="new-interested"
        relative="path"
        className="w-30 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 mt-4"
      >
        + Neu
      </Link>
      <div className="flex flex-col items-center flex-grow mt-2">
        {!interestedAvailable && (
          <>
            <h1 className="text-2xl">
              Wilkommen auf der Interessenten Übersicht{" "}
            </h1>
            <p>
              Bitte geben Sie einen Suchbegriff ein und klicken Sie auf den
              &apos;Suche&apos; Button
            </p>
          </>
        )}

        {interestedAvailable && <InterestedPersonsTable persons={data} />}
      </div>
    </div>
  );
};

export default InterestedPersonsPage;
