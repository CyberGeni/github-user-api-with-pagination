import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route 
          path='error'
          element={<TestError />}
        />
      </Routes>
    </Router>
    
   );
}

export default App ;