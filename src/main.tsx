import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [{
      path: "item/:id",
      element: <h2>Detailed page</h2>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>,
);
