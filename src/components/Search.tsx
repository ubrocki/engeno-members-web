import React from "react";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  placeholder: string;
  initialSearchTerm: string | null;
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  initialSearchTerm,
  onSearch,
  onReset,
}) => {
  const searchElement = React.useRef<HTMLInputElement>(null);

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.currentTarget.value === "") {
      onReset();
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchTerm = searchElement.current?.value;

    if (!searchTerm) {
      return;
    }

    onSearch(searchTerm);
  }

  return (
    <section>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
        id="search-form"
      >
        <input
          type="search"
          placeholder={placeholder}
          className="border border-gray-300 mr-2 pt-1 pb-1 pl-2 rounded-md w-60"
          defaultValue={initialSearchTerm ?? ""}
          ref={searchElement}
          onInput={handleInput}
        />
        <Button variant="outline" className="flex items-center justify-center">
          <FaSearch className="mr-2" />
          Suche
        </Button>
      </form>
    </section>
  );
};

export default Search;
