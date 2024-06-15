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
    <div className="flex h-screen flex-col items-center justify-between">
      <Search
        placeholder="Suche Interessenten..."
        initialSearchTerm={searchTerm}
        onSearch={handleSearchButtonClick}
        onReset={handleSearchTermReset}
      />
      <Link
        to="new-interested"
        relative="path"
        className="w-30 mt-4 rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700"
      >
        + Neu
      </Link>
      <div className="mt-2 flex flex-grow flex-col items-center">
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
