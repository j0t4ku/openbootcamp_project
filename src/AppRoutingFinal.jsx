import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashBoard from './pages/dashboard/DashBoard';
import HomePage from './pages/home/HomePage';
import TasksPage from './pages/tasks/TasksPage';
import ProtectedRoute from './routes/ProtectedRoute';


function AppRouting() {

  //TODO: change to value from sessionStorage
  let loggedIn = true;

  return (
    <div className="App">
      <Router>
        {/* Redirections to protect our routes */}
        <Routes>

          <Route path='/' element={
            loggedIn ?
            <Navigate to='/dashboard'/>
            :
            <Navigate to='/login' />
          }>
          </Route>
           
          {/* Login Route */}
          <Route path='/login' Component={LoginPage} ></Route>

          {/* Dashboard Route */}
          <Route path='/dashboard'
            element={
            loggedIn ? (
              <DashBoard />
            ) : (
              <Navigate
                to='/login' />
                )
              }
          />
          {/* Register Route */}
          <Route path='/register' Component={RegisterPage} />

          {/* Task Route */}
          <Route path='/task'
            element={
            loggedIn ? (
              <TasksPage />
            ) : (
              <Navigate
                to='/login' />
                )
              }
          />

          <Route Component={NotFoundPage}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouting

