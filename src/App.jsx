import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import RepositoryInfo from './pages/RepositoryInfo';
import PageNotAvailable from './pages/PageNotAvailable';
import TestError from './pages/TestError';

function App () {
  return ( 
    <Router>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path="repositories"
          element={<Repositories />}>
          <Route 
            path="cybergeni/:id"
            element={<RepositoryInfo />}
          />
        </Route>
        {/* catch unregistered routes and display a 404 page component */}
        <Route 
          path='*'
          element={<PageNotAvailable />}
        />
        {/* testing the error fallback component */}
        <Route 
          path='error'
          element={<TestError />}
        />
      </Routes>
      <Link to="/error" className="text-slate-300 animate-bounce absolute flex items-center bottom-5 right-5 bg-slate-600 px-2 py-1 opacity-50 rounded space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="rgba(236,240,241,1)"/></svg>
        Test Error
      </Link>
    </Router>
    
   );
}

export default App ;