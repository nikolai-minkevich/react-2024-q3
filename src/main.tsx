import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <h2>Test</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>,
);
