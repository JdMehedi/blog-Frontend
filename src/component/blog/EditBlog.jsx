
import { useEffect, useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditBlog = () => {
    const navigate = useNavigate();
    const [html, setHtml] = useState("");
    const [image, setImage] = useState(null);
    const [blogs, setDetails] = useState([]);

    const params = useParams();
    const DetailsPage = async()=>{
        try{
        const response = await axios.get(`http://localhost:8000/view/blog`,{
            params: { id: params.id },
        })

        setHtml(response.data.data.description)
        reset(response.data.data)
        setDetails(response.data.data)
         } catch (error) {
            console.dir(error);
        } 

    }
    useEffect(()=>{
        DetailsPage()
    },[]);
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
       
      } = useForm()

      const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file);
          }
    };
      function onChangeEditor(e) {
        setHtml(e.target.value); 
      }

      const onSubmitData = async(data)=>{
        // const newdata = {...data, "description":html}
        // console.log(newdata);
        // const formData = new FormData();

        // Append text data
        formData.append("title", data.title);
        formData.append("short_description", data.short_description || ""); // Optional
        formData.append("description", html); // Add the description (from editor)
        formData.append("author", data.author);
        // formData.append("id", params.id);
        // console.log("Data from form:", data);
        // console.log("Description (HTML):", html);
        // console.log("Selected image:", image);
        for (const [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
      }
        
        // Append the selected image file
        if (image) {
          formData.append("image", image);
        }
        try {
            const response = await axios.put(
              `http://localhost:8000/update/blog?id=${params.id}`, 
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
              
            );
            toast(response.data.message);
            navigate("/");
          } catch (error) {
            console.error("Error adding blog:", error);
          }


      }
    return (
        <div className="container">
        <div className="d-flex justify-content-between pt-4">
            <h3>Update Blog</h3>
            <a href="/" className='btn btn-dark'>Back</a>
        </div>

        <form onSubmit={handleSubmit(onSubmitData)} encType="multipart/form-data">
            <div className="card border-0 shadow-lg mt-2">
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input 
                        {...register('title',{required:true})} 
                        type="text" 
                        className={`form-control ${errors.title? 'is-invalid':''}`} 
                        placeholder="Enter a title" />
                        {errors.title && <p className='invalid-feedback'>Title is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Short Description</label>
                        <textarea 
                        {...register('short_description')} 
                        className='form-control' 
                        id="" 
                        cols="60" 
                        rows="4">

                        </textarea>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Description</label>
                        <Editor  value={html} containerProps={{ style: { height: '300px' } }} onChange={onChangeEditor} />
                    </div>
                    <div className="mb-3">
                        <label  htmlFor="Image" className="form-label">Image</label><br />
                        <input onChange={handleImageChange} type="file"/>
                        {
                        (blogs.image) && <img className="w-10" src={`http://localhost:8000/uploads/blogs/images/${blogs.image}`} alt="" />
                    }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Author" className="form-label">Author</label>
                        <input 
                        {...register('author',{required:true})} 
                        type="text" 
                        className={`form-control ${errors.author? 'is-invalid':''}`} 
                        placeholder="Enter Author"/>
                        {errors.author && <p className='invalid-feedback'>Author is required</p>}

                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>

                </div>

            </div>
        </form>
    </div>
    );
};

export default EditBlog;