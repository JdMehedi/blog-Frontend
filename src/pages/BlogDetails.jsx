import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
 const [blogs, setDetails] = useState([]);
 const params = useParams();
    const DetailsPage = async()=>{
        try{
        const response = await axios.get(`http://localhost:8000/view/blog`,{
            params: { id: params.id },
        })
        setDetails(response.data.data)
         } catch (error) {
            console.dir(error);
        } 

    }
    useEffect(()=>{
        DetailsPage()
    },[]);

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-2">
                <div>
                <h2>{blogs.title}</h2>
                </div>
                <div>
                    <a href="/" className="btn btn-dark">Back to blogs</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>by <strong>{blogs.author} </strong> on <strong>{blogs.date}</strong></p>
                    {
                        (blogs.image) && <img className="w-50" src={`http://localhost:8000/uploads/blogs/images/${blogs.image}`} alt="" />
                    }
                    <div className="mt-4" dangerouslySetInnerHTML={{__html:blogs.description}}>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BlogDetails;