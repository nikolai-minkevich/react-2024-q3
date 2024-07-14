import { FC, ReactElement } from "react";
import { useRouteError } from "react-router-dom";

type TRouteError = {
  statusText: string | undefined;
  message: string | undefined;
}

const ErrorPage: FC = (): ReactElement => {
  const error: TRouteError = useRouteError() as TRouteError;
  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Custom 404 page.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
