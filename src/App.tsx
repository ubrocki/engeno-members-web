import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MembersPage from "./pages/MembersPage";
import InterestedPersonsPage from "./pages/InterestedPersonsPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import MembersLayout from "./pages/MembersLayout";
import NewMemberPage from "./pages/NewMemberPage";
import NewInterestedPersonPage from "./pages/NewInterestedPersonPage";
import InterestedPersonsLayout from "./pages/InterestedPersonsLayout";
import InterestedPersonDetailsPage from "./pages/InterestedPersonDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "members",
        element: <MembersLayout />,
        children: [
          {
            index: true,
            element: <MembersPage />,
          },
          {
            path: ":memberId",
            element: <MemberDetailsPage />,
          },
          {
            path: "new-member",
            element: <NewMemberPage />,
          },
        ],
      },
      {
        path: "interested-persons",
        element: <InterestedPersonsLayout />,
        children: [
          {
            index: true,
            element: <InterestedPersonsPage />,
          },
          {
            path: ":interestedId",
            element: <InterestedPersonDetailsPage />,
          },
          {
            path: "new-interested",
            element: <NewInterestedPersonPage />,
          },
        ],
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
