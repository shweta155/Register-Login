
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
