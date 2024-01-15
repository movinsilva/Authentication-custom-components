import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SignIn />} />
        </Routes>
      </>
    </Router>
    
  )
}

export default App
