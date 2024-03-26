import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/about' element={<Index />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
