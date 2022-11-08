import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Profile() {
  let url = "https://api.github.com/users/cybergeni";
  const { state } = useFetch(url);
  const { loading, user } = state;

  return (
    <>
      {loading && <div className="h-screen bg-[#141c2f] flex text-center items-center justify-center text-white font-['Space_Grotesk']">one sec...</div>}
      {user && (
        <div className="bg-[#141c2f] text-slate-300 h-screen flex flex-col items-center justify-center font-['Space_Grotesk']">
          <main className="bg-[#1f2a48] w-10/12 rounded-lg p-6 sm:p-12 md:max-w-3xl lg:max-w-4xl">
            <section className="flex items-center space-x-4 sm:space-x-8">
              <img 
                className="rounded-full w-20 sm:w-28"
                src={user.avatar_url} 
                alt={user.name} />
              <div>
                <h1 className="text-xl sm:text-3xl font-bold mb-1">{user.name}</h1>
                <a href={user.html_url} className="text-blue-500">@{user.login}</a>
                {/* user url if needed  */}
                <p>Joined 25 August 2020</p>
              </div>
            </section>

            <section>
              <p className="mt-4 text-md sm:text-base">{user.bio}</p>
            </section>

            <section className="bg-[#141c2f] rounded-md grid grid-cols-3 px-4 sm:px-8 py-4 sm:py-6 my-6">
              <div>
                <span className="text-sm sm:text-base">Repos</span>
                <h1 className="text-2xl font-semibold text-white">{user.public_repos}</h1>
              </div>
              <div>
                <span className="text-sm sm:text-base">Followers</span>
                <h1 className="text-2xl font-semibold text-white">{user.followers}</h1>
              </div>
              <div>
                <span className="text-sm sm:text-base">Following</span>
                <h1 className="text-2xl font-semibold text-white">{user.following}</h1>
              </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
              <div className="flex space-x-1">
              <svg className="fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                <p>{user.location}</p>
              </div>
              <div className="flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" fill="rgba(236,240,241,1)"/></svg>
                <p>{user.blog}</p>
              </div>
              <div className="flex space-x-1">
              <svg className="fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"/></svg>
                <a href="https://twitter.com/cybergenie_">@{user.twitter_username}</a>
              </div>
              <div className="flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(236,240,241,1)"/></svg>
                <p className="text-slate-500">Not Available</p>
              </div>
            </section>

            <button className="mx-auto w-full mt-9 mb-4">
                <Link to="/repositories" className="border rounded px-5 py-3 hover:ring-2 hover:px-7 transition-all">View repositories</Link>
            </button>
          </main>
          
        </div>
      )}
    </>
  );
}
export default Profile;
