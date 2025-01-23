import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {

    const navigate = useNavigate();
    const [html, setHtml] = useState("");
    const [image, setImage] = useState(null);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        // setValue
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
        const formData = new FormData();

        // Append text data
        formData.append("title", data.title);
        formData.append("short_description", data.short_description || ""); // Optional
        formData.append("description", html); // Add the description (from editor)
        formData.append("author", data.author);
      
        // Append the selected image file
        if (image) {
          formData.append("image", image);
        }
        console.log(formData);
        try {
            const response = await axios.post(
              "http://localhost:8000/store/blog",
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
                <h3>Create Blog</h3>
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

export default CreateBlog;