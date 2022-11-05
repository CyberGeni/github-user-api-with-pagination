import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Profile() {
  let url = "https://api.github.com/users/cybergeni";
  const { state } = useFetch(url);
  const { loading, user } = state;

  return (
    <>
      {loading && <p className="loading">loading</p>}
      {user && (
        <div className="bg-[#141c2f] text-slate-300 h-screen flex flex-col items-center justify-center">
          <main className="bg-[#1f2a48] w-4/5 rounded-lg p-12">
            <section className="flex items-center space-x-8">
              <img 
                className="rounded-full w-28"
                src={user.avatar_url} 
                alt={user.name} />
              <div>
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <a href={user.html_url} className="text-blue-500">@{user.login}</a>
                {/* user url if needed  */}
                <p>Joined 25 August 2020</p>
              </div>
            </section>

            <section>
              <p className="mt-4">{user.bio}</p>
            </section>

            <section className="bg-[#141c2f] rounded-md grid grid-cols-3 px-8 py-6 my-6">
              <div>
                <span>Repos</span>
                <h1 className="text-2xl font-semibold text-white">{user.public_repos}</h1>
              </div>
              <div>
                <span>Followers</span>
                <h1 className="text-2xl font-semibold text-white">{user.followers}</h1>
              </div>
              <div>
                <span>Following</span>
                <h1 className="text-2xl font-semibold text-white">{user.following}</h1>
              </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                <p>{user.location}</p>
              </div>
              <div>
                <p>{user.blog}</p>
              </div>
              <div>
                <p>@{user.twitter_username}</p>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
            </section>
          </main>
          <button>
            <Link to="/repositories">Repositories</Link>
          </button>
        </div>
      )}
    </>
  );
}
export default Profile;
