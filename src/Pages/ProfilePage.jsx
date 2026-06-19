import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import SearchSection from '../components/SearchSection'

function ProfilePage(props) {
  return (
    <>
        <Navbar/>
        <SearchSection profile={props.profile} setProfile={props.setProfile}/>
        {props.profile.username && (<ProfileCard profile={props.profile} />)}
    </>
  )
}

export default ProfilePage