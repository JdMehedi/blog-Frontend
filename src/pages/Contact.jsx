import { useState } from "react";

const Contact = () => {
    const [blogs] = useState([]);

//  const onChange = ()=>{
//     await axios.post('http://localhost:8000/store/blog', newdata).then(res=>console.log(res)).catch(err=>console.log(err));
//     toast("Blog added successfully");
//     navigate('/');
//  }


    return (
        <div className="container">
            <bu>Blog List</bu>
            <ul className="list-group">
                {blogs.map((blog) => (
                    <li key={blog.id} className="list-group-item">
                        <h5>{blog.title}</h5>
                        <p>{blog.short_description}</p>
                        <p><strong>Author:</strong> {blog.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;