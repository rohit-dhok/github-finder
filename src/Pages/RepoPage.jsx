import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import '../index.css'

async function fetchRepos(username, setRepos) {
    const API = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setRepos(data);
}

function RepoPage() {
    const params = useParams();
    const [repos, setRepos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchRepos(params.username, setRepos);
    }, [params.username])
    
  return (
    <>
        <Navbar/>
        <section>
            <h1>Repositories</h1>
            {repos.length === 0 && <div className='no-repos'><p>This user hasn't created any public repositories yet.</p></div>}
            <div className="repo-cards-container">
                {repos.map(repo => (
                    <div key={repo.id} className="repo-card">
                        <h3 className='repo-name'>{repo.name}</h3>
                        <p className='repo-desc'>{repo.description || "Description not available"}</p>
                        <div className="misc-data">
                            <p>{repo.language || "N/A"}</p>
                            <p>⭐ {repo.stargazers_count}</p>
                            <p>Forks {repo.forks}</p>
                        </div>
                        <button onClick={() => window.open(repo.svn_url, '_blank', 'noopener,noreferrer')}>View on GitHub</button>
                    </div>
                ))}
                
            </div>
        </section>
    </>
  )
}

export default RepoPage