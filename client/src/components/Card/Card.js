import {RiDeleteBinFill} from 'react-icons/ri';
import {BsPencilFill} from 'react-icons/bs';
import axios from 'axios';

const Card = ({details, setFormType, setShowModal, setEditPost, setCount}) => {

    let { location, name, image} = details;
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
            alert("Post edit failed");
            setShowModal(false);
        })
    }

    return (
        <div className="card">
            <img className="card-img" src={image} alt="image" />
            <div className="card-body">
                <img src="./panda-avatar.png" alt="User" id="user" />
                <div className="card-desc">
                    <div className="card-title">{name}</div>
                    <div className="card-text">{location}</div>
                </div>
                <div className="icons">
                    <RiDeleteBinFill id="trash" onClick={handleDelete} />
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

export default Card;

// https://github.com/rnavaneeth992/csau-react