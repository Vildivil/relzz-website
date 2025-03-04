import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-lg">Something went wrong.</p>
      <p className="text-sm text-gray-500">
        {error.status
          ? `Error ${error.status}: ${error.statusText}`
          : error.message}
      </p>
    </div>
  );
}
