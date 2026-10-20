import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import  Home  from './pages/Home'
import Profile from './pages/Profile'
import ScrapsPage from './pages/Scraps'
import Friends from './pages/Friends'
import Communities from './pages/Communities'

import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/perfil" element={<Profile />} />

        <Route path="/recados" element={<ScrapsPage />} />

        <Route path="/amigos" element={<Friends />} />

        <Route path="/comunidades" element={<Communities />} />

      </Route>
    </Routes>
  )
}

export default App