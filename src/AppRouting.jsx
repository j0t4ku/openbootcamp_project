import { BrowserRouter as Router, Route, Routes, Link, redirect } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import PropsPage from './pages/home/PropsPage';

function AppRouting() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
  }, []);

  let tasklist = [
    {
      id: 1,
      name: 'Task1',
      description: 'First task'
    },
    {
      id: 1,
      name: 'Task2',
      description: 'Second task'
    },
    {
      id: 1,
      name: 'Task4',
      description: 'Threeth task'
    }
  ]

  return (
    <div className="AppRouting">
      <Router>
        <div>
          <aside>
            <Link to='/' >|Home|</Link>
            <Link to='/login' >|Login|</Link>
            <Link to='/about' >|About|</Link>
            <Link to='/faqs' >|FAQs|</Link>
            <Link to='/profile' >|Profile|</Link>
            <Link to='/404'>|TODO|</Link>
            <Link to='/task/1' >|Task 1|</Link>
            <Link to='/task/2' >|Task 2|</Link>
            <Link to='/online-state' >|Props|</Link>




          </aside>

          <main>
            <Routes>
              <Route exect path='/' Component={HomePage} />
              <Route exect path='/online-state' Component={PropsPage} />

              <Route exect path='/login' Component={LoginPage}>
                {
                  logged ? () => {
                    alert('You must be logged in Redirect to home')
                    redirect('/')
                  }
                    :
                    () => {
                      return (<LoginPage></LoginPage>)
                    }
                }
              </Route>
              <Route path='/about' Component={AboutPage}></Route>
              <Route path='/faqs' Component={AboutPage}></Route>

              <Route path='/profile' Component={ProfilePage}>
                {
                  logged ? <ProfilePage />
                    :
                    () => {
                      alert('You must be logged in, redirect to login..')
                      redirect('/login')
                    }
                }
              </Route>

              <Route path='/tasks' Component={TaskPage}></Route>
              <Route
                exect
                path='/tasks/:id'
                loader={(match)=><TaskDetailPage task={tasklist[match.params.id-1]}/>}
              >

              </Route>
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

