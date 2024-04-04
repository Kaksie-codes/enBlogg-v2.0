import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import BlogPage from './pages/BlogPage';
import UserVerificationPage from './pages/UserVerificationPage';
import PrivateRoutes from './components/PrivateRoutes';
import OnlyAdminPrivateRoutes from './components/OnlyAdminPrivateRoutes';
import PageNotFound from './pages/PageNotFound';
import UserAuthPage from './pages/UserAuthPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import EditorPage from './pages/EditorPage';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <ToastContainer/>   
      <Toaster/>  
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          
          {/* <Route path='signup' element={<UserSignUp/>}/> */} 
          <Route path='profile' element={<ProfilePage/>}/> 
          <Route path='search/:query' element={<SearchPage/>}/>
          <Route path='blogs/:slug' element={<BlogPage/>}/> 
          <Route path='users/:id/verify/:token' element={<UserVerificationPage/>}/>

                   {/*Protected Routes  */}
          <Route path='' element={<PrivateRoutes/>}> 
            <Route path='users/:id' element={<ProfilePage/>}/> 
          </Route>

                  {/* Admin private Routes */}
          <Route path='' element={<OnlyAdminPrivateRoutes/>}>
            {/* <Route path='admin' element={<AdminDashboard/>}/> */}
          </Route>

          <Route path='*' element={<PageNotFound/>}/>          
        </Route>

        <Route path='/auth' element={<UserAuthPage/>}/>
        <Route path='reset-password' element={<ForgotPasswordPage/>}/>
        
                {/*Protected Routes  */}
        <Route path='' element={<PrivateRoutes/>}>
          <Route path='/editor' element={<EditorPage/>}/> 
          <Route path='/editor/:slug' element={<EditorPage/>}/> 
        </Route>
        
      </Routes>
    </>
  )
}

export default App
