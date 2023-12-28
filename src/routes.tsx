import { createBrowserRouter } from "react-router-dom";

import { GameDetailsPage, Layout, HomePage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailsPage /> }
    ]
  }
]);

export default router;
