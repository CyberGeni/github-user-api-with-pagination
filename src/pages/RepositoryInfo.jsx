import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function RepositoryInfo() {
  const location = useLocation();
  let { doc } = location.state;
 
  let lastUpdate = new Date(doc.updated_at).toDateString()

  return (
<div className="relative flex items-center justify-center h-screen top-[-200vh] bg-[#141c2f] overflow-hidden">
      <main className="absolute z-10 top-0 bg-[#1f2a48] grid grid-cols-2 shadow-md rounded-md my-auto p-8 mt-12 sm:w-3/5">
        <div>
          <h1 className="text-sm font-semibold text-slate-500 mb-1">AUTHOR</h1>
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
          <a href={doc.svn_url} target="_blank">
               <p className="text-md font-semibold text-slate-50">{doc.name}</p>
          </a>
        </div>
        <div className="mt-3">
          <h1 className="text-sm font-semibold text-slate-500">VISIBILITY</h1>
          <p className="text-slate-200 capitalize">{doc.visibility}</p>
        </div>
        <div className="mt-3">
          <h1 className="text-sm font-semibold text-slate-500">STARS</h1>
          <p className="text-slate-200 capitalize">{doc.stargazers_count}</p>
        </div>
        <div className="mt-3">
          <h1 className="text-sm font-semibold text-slate-500">FORKS</h1>
          <p className="text-slate-200 capitalize">{doc.forks}</p>
        </div>
        <div className="mt-3">
          <h1 className="text-sm font-semibold text-slate-500">LAST UPDATED</h1>
          <p className="text-slate-200 capitalize">{lastUpdate}</p>
        </div>
        <div className="mt-3">
          <h1 className="text-sm font-semibold text-slate-500">STACK</h1>
          <p className="text-slate-200 capitalize ">{doc.language}</p>
        </div>
        <div className="mt-3 space-y-1">
          <h1 className="text-sm font-semibold text-slate-500">REPOSITORY LINK</h1>
          <a className="border border-slate-600 px-2 py-1 rounded-lg" href={doc.html_url} rel="noreferrer" target="_blank">View on Github</a>
        </div>
      </main>
    </div>

    //   
    //     view repository on githbub
    //   </a>
    // </div>
  );
}
export default RepositoryInfo;