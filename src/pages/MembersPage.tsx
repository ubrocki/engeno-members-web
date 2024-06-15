import React, { useContext } from "react";
import Search from "@/components/Search";

import MembersTable from "@/components/MembersTable";
import { useQuery } from "@tanstack/react-query";
import MembersRepository from "@/data/MembersRepository";
import SearchContext from "@/stores/SearchContext";
import { Link } from "react-router-dom";

interface MembersPageProps {}

const MembersPage: React.FC<MembersPageProps> = () => {
  const searchCtx = useContext(SearchContext);

  const searchTerm = searchCtx.membersSearchTerm;

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () =>
      searchTerm === null
        ? MembersRepository.getMembersPreview()
        : MembersRepository.getMembersPreview(searchTerm),
    queryKey: ["members", { searchTerm: searchTerm }],
    enabled: searchTerm !== null,
  });

  function handleSearchButtonClick(searchTerm: string) {
    searchCtx.setMembersSearchTerm(searchTerm);
  }

  function handleSearchTermReset() {
    searchCtx.resetMembersSearchTerm();
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const membersAvailable = data && data.length > 0;

  return (
    <div className="flex w-full flex-col items-center justify-between">
      <Search
        placeholder="Suche Genossen..."
        initialSearchTerm={searchTerm}
        onSearch={handleSearchButtonClick}
        onReset={handleSearchTermReset}
      />
      <Link
        to="new-member"
        relative="path"
        className="w-30 mt-4 rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700"
      >
        + Neu
      </Link>
      <div className="mt-2 flex flex-grow flex-col items-center">
        {!membersAvailable && (
          <>
            <h1 className="text-2xl">Wilkommen auf der Mitgliederübersicht</h1>
            <p>
              Bitte geben Sie einen Suchbegriff ein und klicken Sie auf den
              &apos;Suche&apos; Button
            </p>
          </>
        )}

        {membersAvailable && <MembersTable members={data} />}
      </div>
    </div>
  );
};

export default MembersPage;
