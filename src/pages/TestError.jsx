import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";

function TestError() {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong");
  }

  return (
    <>
      <div className="bg-[#141c2f] text-slate-300 font-['Space_Grotesk'] h-screen flex flex-col items-center justify-center text-center">
        <ErrorBoundary
          FallbackComponent={Error}
          onReset={() => setError("")}
          resetKeys={[error]}
        >
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
