import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProfileCard(props) {
    const navigate = useNavigate();
  return (
    <section>
        <div className="profile-container">
            <div className="card">
                <div className="detail-sec-1">
                    <img src={props.profile.profilePicture} alt="" />
                    <div className='user-data'>
                        <p className='display-name'>{props.profile.displayName}</p>
                        <div className='follow-data'>
                            <div>
                                <p className='num-data'>{props.profile.followers}</p>
                                <p>Followers</p>
                            </div>
                            <div>
                                <p className='num-data'>{props.profile.following}</p>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="detail-sec-2">
                    <p className='username'>@{props.profile.username}</p>
                    <p>Public Repos : <span className='num-data'>{props.profile.publicRepos}</span></p>
                    <p className='user-bio'>{props.profile.bio}</p>
                </div>
                <button onClick={() => navigate(`/repos/${props.profile.username}`)}>View Repos</button>
            </div>
        </div>
    </section>
  )
}

export default ProfileCard