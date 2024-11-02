import { Link } from "react-router-dom";

type propsErrorType = {
  error:
    | {
        status?: number;
        statusText?: string;
        message?: string;
        ok?: boolean;
        token?: string;
        error?: string;
      }
    | string;
};

const ErrorPage = ({ error }: propsErrorType) => {
  if (typeof error === "string") {
    return (
      <main className="center-wrapper">
        <h1>520</h1>
        <p className="error-message">{error}</p>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }
  return (
    <main className="center-wrapper">
      <h1>{error?.status || "520"}</h1>
      <p className="error-message">
        {error?.statusText || error?.message || "Unknown error..."}
      </p>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

export default ErrorPage;
