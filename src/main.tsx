import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <MainPage />{" "}
  </ErrorBoundary>,
);
