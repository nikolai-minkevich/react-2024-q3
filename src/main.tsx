import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import DetailedView from "./components/DetailedView";
import episodeLoader from "./loaders/episodeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "item/:id",
        element: <DetailedView />,
        loader: episodeLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>,
);
