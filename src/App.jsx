import Layout from './layout/Layout'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Job from './pages/jobs/Jobs'
import Companies from './pages/companies/Companies'
import About from './pages/aboutus/About'
import CareerTip from './pages/careertip/CareerTip'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>    
          <Route index element={<Home/>}/>
          <Route path="/jobs" element={<Job/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/careertip" element={<CareerTip/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>
      </Routes>

    </>
  )
}


export default App
