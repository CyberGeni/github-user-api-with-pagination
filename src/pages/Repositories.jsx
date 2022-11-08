import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Repositories() {
  const [page, setPage] = useState(1);
  let url = `https://api.github.com/users/cybergeni/repos?page=${page}&per_page=9&results=120`;
  const { state } = useFetch(url);
  const { loading, user } = state;
  let pages = 8;
  return (
    <>
      <Helmet>
        <title>`Cybergeni's Repositories`</title>
        <meta name="description" content="Here is a list of all the repositories" />
      </Helmet>
      <div>
        {loading && <div className="h-screen flex text-center items-center justify-center bg-[#141c2f] text-white font-['Space_Grotesk'] ">it a'int like i'm serving you cookies 🙄</div>}
        <main className="bg-[#141c2f] text-slate-300 font-['Space_Grotesk'] min-h-screen p-10">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {user &&
              user.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-[#1f2a48] shadow-md rounded-md p-4"
                >
                  <Link to={`cybergeni/${doc.name}`} state={{ doc: doc }}>
                    <div>
                      <h1 className="text-sm font-semibold text-slate-500 mb-1">
                        AUTHOR
                      </h1>
                      <div className="flex items-center">
                        <img
                          src={doc.owner.avatar_url}
                          alt={doc.login}
                          className="w-8 h-8 mr-2 rounded-full"
                        />
                        <p className="text-slate-200">{doc.owner.login}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h1 className="text-sm font-semibold text-slate-500">
                        REPOSITORY NAME
                      </h1>
                      <p className="text-md font-semibold text-slate-50">
                        {doc.name}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </section>
          <div className="">
            <div className="border border-slate-700 rounded-lg w-fit mx-auto my-12">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="p-2 sm:px-6 sm:py-4 active:bg-[#1f2a48] focus:bg-[#1f2a48] disabled:bg-gray-800 disabled:text-gray-600"
              >
                prev
              </button>
              {Array.from({ length: pages }, (value, index) => index + 1).map(
                (btn) => (
                  <button
                    key={btn}
                    onClick={() => setPage(btn)}
                    className="px-2 sm:px-6 sm:py-4 active:bg-[#1f2a48] focus:bg-[#1f2a48] rounded"
                  >
                    {btn}
                  </button>
                )
              )}
              <button
                disabled={page >= 8}
                onClick={() => setPage((prev) => prev + 1)}
                className="p-2 sm:px-6 sm:py-4 active:bg-[#1f2a48] focus:bg-[#1f2a48] hover:bg-[#1f2a48] disabled:bg-gray-800 disabled:text-gray-600"
              >
                next
              </button>
            </div>
          </div>
          
        </main>
      </div>
    </>
  );
}
export default Repositories;