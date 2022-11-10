import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import { Link } from "react-router-dom";

function TestError() {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong!");
  }

  return (
    <>
      <div className="bg-[#141c2f] text-slate-300 font-['Space_Grotesk'] h-screen flex flex-col items-center justify-center text-center">
        <ErrorBoundary
          FallbackComponent={Error}
          onReset={() => setError("")}
          resetKeys={[error]}
        >
          <Link to="/" className=" col-span-2 w-fit -mt-24 -ml-8">
            <span className="absolute left-8 sm:left-12 md:left-16 top-8 sm:top-12 md:top-16 flex items-center justify-center text-slate-300 border border-slate-600 px-3 py-2 rounded-lg">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(236,240,241,1)"/></svg>
              Go back</span>
          </Link>
          <button
            onClick={() => setError(true)}
            className="border rounded px-5 py-3 hover:px-7 transition-all"
          >
            DO NOT CLICK
          </button>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default TestError;
