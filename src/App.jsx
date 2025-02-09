import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './component/blog/EditBlog';
import EmonitoringData from './pages/EmonitoringData';
function App() {

  const location = useLocation()
  const hideHeaderRoutes = ['/emonitoring/list'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);
  console.log(location)

  return (
    <>
        {!shouldHideHeader && (
        <div className='bg-success text-white py-2 text-center'>
          <h1 className='text-white'>Exam Portal</h1>
          <ToastContainer />
        </div>
      )}
       <Routes>
          <Route path='/' element={<Blogs/>}/>
          <Route path='/create/blog' element={<CreateBlog/>}/>
          <Route path='/emonitoring/list' element={<EmonitoringData/>}/>
          <Route path='/blog/details/:id' element={<BlogDetails/>}/>
          <Route path='/blog/edit/:id' element={<EditBlog/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
     
    </>
  )
}

export default App
