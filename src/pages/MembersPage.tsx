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
    <div className="flex flex-col items-center justify-between h-screen">
      <Search
        placeholder="Suche Genossen..."
        initialSearchTerm={searchTerm}
        onSearch={handleSearchButtonClick}
        onReset={handleSearchTermReset}
      />
      <Link
        to="new-member"
        relative="path"
        className="w-30 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 mt-4"
      >
        + Neu
      </Link>
      <div className="flex flex-col items-center flex-grow mt-2">
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
