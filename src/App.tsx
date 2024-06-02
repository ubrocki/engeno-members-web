import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MembersPage from "./pages/MembersPage";
import InterestedPersonsPage from "./pages/InterestedPersonsPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchContextProvider } from "./stores/SearchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchContextProvider>
        <Layout />
      </SearchContextProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "members",
        element: <MembersPage />,
      },
      {
        path: "interested-persons",
        element: <InterestedPersonsPage />,
      },
      {
        path: "members/:memberId",
        element: <MemberDetailsPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
