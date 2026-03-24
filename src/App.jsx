  import './App.css'
  import NavBar from './NavBar'
  import Home from './Home'
  import About from './About'
  import Contact from './Contact'
  import SinglePost from './Singlepost'
  import Dcma from './Dcma'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Disclaimer from './Disclaimer'
import PrivacyPolicy from './PrivacyPolicy'
import Terms from './Terms'
import Phones from './Phones'

  function App() {
  
    return (
      <>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<SinglePost />} />
    {/* <Route path="/dcma" element={<Dcma />} /> */}
    {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
    <Route path="/privacy" element={ <PrivacyPolicy />} />
    <Route path="/terms" element={ <Terms />} />
    <Route path="/phones" element={ <Phones />} />
    </Routes>
  </Router>

    
      
      </>
    )
  }

  export default App
