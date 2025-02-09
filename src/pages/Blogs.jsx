import { useEffect, useState } from "react";
import BlogCard from "../component/blog/BlogCard";
import axios from "axios";
import { toast } from "react-toastify";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:8000/index/blog");
            setBlogs(response.data.data); 
        } catch (error) {
            console.dir(error);
            toast.error("Failed to fetch blogs.");
        } 
    };
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="pt-4">
                   <input type="button" value="Search" ></input>
                   <a href="/emonitoring/list" className='btn btn-success m-4'>Irms testing data</a>

                </div>
                <div className="d-flex justify-content-between pt-4">
                    <h3>Blog</h3>
                    <a href="/create/blog" className='btn btn-dark'>Create</a>
                </div>

                <div className="row mt-2">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
