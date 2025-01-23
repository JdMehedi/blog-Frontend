import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './component/blog/EditBlog';
function App() {

  return (
    <>
<div className='bg-success text-white py-2 text-center'>
        <h1 className='text-white'>Exam portal</h1>
        <ToastContainer />
     
      </div>
       <Routes>
          <Route path='/' element={<Blogs/>}/>
          <Route path='/create/blog' element={<CreateBlog/>}/>
          <Route path='/blog/details/:id' element={<BlogDetails/>}/>
          <Route path='/blog/edit/:id' element={<EditBlog/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
     
    </>
  )
}

export default App
