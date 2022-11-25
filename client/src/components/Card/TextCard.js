import {RiDeleteBinFill} from 'react-icons/ri';
import {BsPencilFill} from 'react-icons/bs';
import axios from 'axios';

function TextCard({details, setFormType, setShowModal, setEditPost, setCount}) {
    let { location, name, caption, title} = details;
    const handleDelete = () => {
        axios.delete(`http://localhost:9000/posts/${details._id}`)
        .then((response) => {
            console.log(response);
            if(response.status == 401) {
                alert("Post delete failed");
            } else {
                alert("Post delete success");
            }
            setCount((p) => p+1);
            setShowModal(false);
        })
        .catch((err) => {
            console.log(err);
            alert("Post delete failed");
            setShowModal(false);
        })
    }
    return(
        <div className="card">
            {/* <img className="card-img" src="https://images.unsplash.com/photo-1663915943941-9e3b66fe1e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" /> */}
            <div className='card-img textcard-body'>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-text'>
                    {caption}
                </div>
            </div>
            <div className="card-body">
                <img src="./panda-avatar.png" alt="User" id="user" />
                <div className="card-desc">
                    <div className="card-title">{name}</div>
                    <div className="card-text">{location}</div>
                </div>
                <div className="icons">
                    <RiDeleteBinFill id="trash" onClick={handleDelete}  />
                    <BsPencilFill id="edit" onClick={() => {
                        setEditPost(details);
                        setShowModal(true);
                        setFormType("edit");
                    }} />
                </div>
            </div>
        </div>
    )
}

export default TextCard;