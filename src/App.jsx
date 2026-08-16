import Layout from "./layout/Layout"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Job from './pages/Jobs'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/jobs" element={<Job/>}/>
        </Route>
      </Routes>

    </>
  )
}


export default App
