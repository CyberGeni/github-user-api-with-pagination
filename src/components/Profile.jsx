import React from "react";
import useFetch from "../hooks/useFetch";

function Profile() {
  let url = "https://api.github.com/users/cybergeni";
  const { state } = useFetch(url);
  const { loading, user } = state;
 
  return (
    <>
      {loading && <p className="loading">loading</p>}
      {user && (
          <div className="bg-red-500">
            <main>
                <section>
                <img src={user.avatar_url} alt={user.name} />
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.login}</p>
                    {/* user url if needed {user.html_url} */}
                    {/* <p>join date goes here</p> */}
                </div>
                </section>

                <section>
                <p>{user.bio}</p>
                </section>

                <section>
                <div>
                    <span>Repos</span>
                    <h1>{user.public_repos}</h1>
                </div>
                <div>
                    <span>Followers</span>
                    <h1>{user.followers}</h1>
                </div>
                <div>
                    <span>Following</span>
                    <h1>{user.following}</h1>
                </div>
                </section>
            </main>

            <section>
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
                <p>company goes here</p>
                </div>
                
            </section>
            <button></button>
          </div>
      )}
      
    </>
  );
}
export default Profile;