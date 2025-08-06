// src/App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
      <Route path='/' element={<h1>Hello world!</h1>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

      <Route path='*' element={<h1>Error 404</h1>}/>

      </Routes>
      
    </>
  )
}

export default App