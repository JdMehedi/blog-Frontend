import Button from "../ui/Button";
const BlogCard = (blog) => {

    const showImage = (img)=>{
        return (img)? `http://localhost:8000/uploads/blogs/images/` + img: `https://www.shutterstock.com/shutterstock/photos/1960871815/display_1500/stock-vector-modern-mock-up-smartphone-for-presentation-information-graphics-app-display-perspective-view-1960871815.jpg`;

    }
    return (
          <div className="col-12 col-md-2 col-lg-3 mb-4">

                <div className="card border-0 shadow-lg rounded">
                <img src={showImage(blog.blog.image)} alt="" />
                    <div className="card-body">
                        <h3>{blog.blog.title}</h3>
                        <p>{blog.blog.short_description}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Button href={`/blog/details/${blog.blog.id}`} details="Details"/>
                        <a href={`/blog/edit/${blog.blog.id}`} className='btn btn-success m-2' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg></a> 
                    </div>
                </div>
            </div>
    );
};

export default BlogCard;