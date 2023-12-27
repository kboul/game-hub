import { createBrowserRouter } from "react-router-dom";

import { GameDetailsPage, Layout, HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/games/:id",
        element: <GameDetailsPage />
      }
    ]
  }
]);

export default router;
