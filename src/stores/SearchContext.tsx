import { createContext, useReducer } from "react";

type SearchContextActions =
  | {
      type: "SET_MEMBERS_SEARCH_TERM";
      payload: { searchTerm: string };
    }
  | {
      type: "SET_INTERESTED_SEARCH_TERM";
      payload: { searchTerm: string };
    }
  | {
      type: "RESET_MEMBERS_SEARCH_TERM";
    }
  | {
      type: "RESET_INTERESTED_SEARCH_TERM";
    };

export interface SearchContextType {
  membersSearchTerm: string | null;
  interestedSearchTerm: string | null;
  setMembersSearchTerm: (searchTerm: string) => void;
  setInterestedSearchTerm: (searchTerm: string) => void;
  resetMembersSearchTerm: () => void;
  resetInterestedSearchTerm: () => void;
}

const initialSearchContext: SearchContextType = {
  membersSearchTerm: null,
  interestedSearchTerm: null,
  setMembersSearchTerm: () => {},
  setInterestedSearchTerm: () => {},
  resetMembersSearchTerm: () => {},
  resetInterestedSearchTerm: () => {},
};

const SearchContext = createContext<SearchContextType>(initialSearchContext);

interface SearchContextProviderProps {
  children: React.ReactNode;
}

function searchContextReducer(
  state: SearchContextType,
  action: SearchContextActions
): SearchContextType {
  switch (action.type) {
    case "SET_MEMBERS_SEARCH_TERM":
      return {
        ...state,
        membersSearchTerm: action.payload.searchTerm,
      };
    case "SET_INTERESTED_SEARCH_TERM":
      return {
        ...state,
        interestedSearchTerm: action.payload.searchTerm,
      };
    case "RESET_MEMBERS_SEARCH_TERM":
      return {
        ...state,
        membersSearchTerm: null,
      };
    case "RESET_INTERESTED_SEARCH_TERM":
      return {
        ...state,
        interestedSearchTerm: null,
      };
    default:
      return state;
  }
}

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [state, dispatch] = useReducer(
    searchContextReducer,
    initialSearchContext
  );

  function setMembersSearchTerm(searchTerm: string) {
    dispatch({ type: "SET_MEMBERS_SEARCH_TERM", payload: { searchTerm } });
  }

  function setInterestedSearchTerm(searchTerm: string) {
    dispatch({ type: "SET_INTERESTED_SEARCH_TERM", payload: { searchTerm } });
  }

  function resetMembersSearchTerm() {
    dispatch({ type: "RESET_MEMBERS_SEARCH_TERM" });
  }

  function resetInterestedSearchTerm() {
    dispatch({ type: "RESET_INTERESTED_SEARCH_TERM" });
  }

  const searchContextValue = {
    membersSearchTerm: state.membersSearchTerm,
    interestedSearchTerm: state.interestedSearchTerm,
    setMembersSearchTerm,
    setInterestedSearchTerm,
    resetMembersSearchTerm,
    resetInterestedSearchTerm,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
