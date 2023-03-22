import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRouting() {

  return (
    <div className="AppRouting">
      <Router>
        <div>
          <aside>
            <Link to='/' >|Home|</Link>
            <Link to='/about' >|About|</Link>
            <Link to='/faqs' >|FAQs|</Link>
            <Link to='/profile' >|Profile|</Link>
            <Link to='/404'>|TODO|</Link>
          </aside>

          <main>
            <Routes>
              <Route exect path='/' Component={HomePage} />
              <Route path='/about' Component={AboutPage}></Route>
              <Route path='/faqs' Component={AboutPage}></Route>
              <Route path='/profile' Component={ProfilePage}></Route>
              <Route path='/tasks' Component={TaskPage}></Route>
              <Route path='/tasks/:id' Component={TaskDetailPage}></Route>
              {/* Page Not Found */}
              <Route path='*' Component={NotFoundPage}></Route>
            </Routes>
          </main>
        </div>



      </Router>
    </div>
  )
}

export default AppRouting

