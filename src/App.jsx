import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchSection from './components/SearchSection'
import ProfileCard from './components/ProfileCard'
import ProfilePage from './Pages/ProfilePage'
import { Route, Routes } from 'react-router-dom'
import RepoPage from './Pages/RepoPage'

function App() {
  const [profile, setProfile] = useState({
    username: "",
    displayName: "",
    profilePicture: "",
    bio: "",
    followers: 0,
    following: 0,
    publicRepos: 0
  })
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProfilePage profile={profile} setProfile={setProfile}/>
        }
      />

      <Route path='/repos/:username' element = {
        <RepoPage/>
      }/>
    </Routes>
  )
}

export default App
