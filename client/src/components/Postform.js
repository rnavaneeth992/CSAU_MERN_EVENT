import {ImCross} from 'react-icons/im';
import {FaCheck} from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

function Postform({setShowModal, setPosts, posts, setCount}) {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [postType, setPostType] = useState("image");

    const handleSubmit = () => {
        let temp = {name: name, location, image: imageLink, title, caption, postType};

        axios.post("http://localhost:9000/posts", temp)
        .then((response) => {
            console.log(response);
            if(response.status == 400) {
                alert("Post creation failed");
            } else {
                alert("Post creation success");
            }
            setCount((p) => p+1);
            setShowModal(false);
        })
        .catch((err) => {
            console.log(err);
            alert("Post creation failed");
            setShowModal(false);
        })

    }

    return(
        <div className="backdrop">
            <div className="form">
                <div className="formtitlecard">
                    <p id="formtitle">Add New Posts</p>
                </div>
                <div className="formFont">
                    Username:
                    <input type="text" className="formInput" placeholder="Enter Username"
                        value={name} onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="formFont">
                    Location:
                    <input type="text" className="formInput" placeholder="Enter location"
                    value={location} onChange={(e) => setLocation(e.target.value)}
                    ></input>
                </div>
                <div className="formFont">
                    Post Type:
                    <select className="formInput" value={postType} onChange={(e) => setPostType(e.target.value)}>
                        <option value="image">Image</option>
                        <option value="text">Text</option>
                    </select>
                </div>
                {
                    postType === "image" 
                    ?
                    <div className="formFont">
                        Img Link:
                        <input type="text" className="formInput" placeholder="Enter Image link"
                            value={imageLink} onChange={(e) => setImageLink(e.target.value)}
                        ></input>
                    </div>
                    :
                    <>
                        <div className="formFont">
                            Title:
                            <input type="text" className="formInput" placeholder="Enter title"
                            value={title} onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                        
                        <div className="formFont">
                            Caption:
                            <input type="text" className="formInput" placeholder="Enter caption"
                            value={caption} onChange={(e) => setCaption(e.target.value)}
                            ></input>
                        </div> 
                    </>
                }
                <div className="rabtn">
                    <div onClick={() => setShowModal(false)}>
                        <ImCross  />
                    </div>
                    <div onClick={handleSubmit}>
                        <FaCheck />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Postform;

{/* <div className="formFont">
    Title:
    <input type="text" className="formInput" placeholder="Enter title"
    value={title} onChange={(e) => setTitle(e.target.value)}
    ></input>
</div>

<div className="formFont">
    Caption:
    <input type="text" className="formInput" placeholder="Enter caption"
    value={caption} onChange={(e) => setCaption(e.target.value)}
    ></input>
</div> */}