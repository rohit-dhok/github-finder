import React, { useState } from 'react'

async function setStates(setProfile, setLoading, setError, user) {
  const API = "https://api.github.com/users/"+ user;

  setLoading(true)
  const response = await fetch(API);
  const data = await response.json();

  if (data.message === "Not Found") {
    setError("User not found.")
    setLoading(false);
    return;
  }
  setError("");

  setProfile({
    username: data.login,
    displayName: data.name,
    profilePicture: data.avatar_url || "https://placehold.co/460x460",
    bio: data.bio || "",
    followers: data.followers,
    following: data.following,
    publicRepos: data.public_repos
  })
  setLoading(false)
}

function SearchSection(props) {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <section>
        <div className="search-container">
            <label htmlFor="search"><h2>Enter GitHub Username</h2></label>
            <div className='input-div'>
                <input value={user} onKeyDown={(e) => {if (e.key == "Enter"){setStates(props.setProfile,setLoading, setError, user)}}} onChange={(e)=>setUser(e.target.value)} className='search-input' type="text" name="search" id="search" size={50}/>
                <button onClick={() => setStates(props.setProfile, setLoading, setError, user)} className='search-btn' disabled={loading.state}>{loading ? "Searching..." : "Search"}</button>
            </div>
            {error && <p className='error'>{error}</p>}
        </div>
        <hr />
    </section>
  )
}

export default SearchSection