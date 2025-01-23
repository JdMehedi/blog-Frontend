
// eslint-disable-next-line react/prop-types
const Button = ({details, href}) => {
    return (
        <a href={href} className='btn btn-dark m-2'>{details}</a>   
    );
};

export default Button;