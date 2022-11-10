import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
function RepositoryInfo() {
  const location = useLocation();
  let { doc } = location.state;
 
  let lastUpdate = new Date(doc.updated_at).toDateString()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#141c2f]">
      <Helmet>
        <title>{doc.name} Info</title>
        <meta name="description" content={doc.description} />
      </Helmet>
      
      <main className="bg-[#1f2a48] grid place-content-start grid-cols-1 sm:grid-cols-2 shadow-md rounded-md p-8 mt-12 w-10/12 h-fit sm:w-3/5 sm:max-w-2xl">
        <Link to="/repositories" className="col-span-2 w-fit -mt-24 -ml-8">
          <span className="flex items-center justify-center text-slate-300 border hover:border-white transitioni-all border-slate-600 px-3 py-2 rounded-lg">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(236,240,241,1)"/></svg>
            Go back</span>
        </Link>
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
        <div className="mt-3">
          <h1 className="text-sm mb-1 font-semibold text-slate-500">
            REPOSITORY LINK
          </h1>
          <a
            className="flex w-fit border hover:border-white transition-all border-slate-600 px-3 py-2 rounded-lg text-white"
            href={doc.html_url}
            rel="noreferrer"
            target="_blank"
          >
            <svg className="mr-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="26"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" fill="rgba(236,240,241,1)"/></svg>
            View on Github
          </a>
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