import {RiDeleteBinFill} from 'react-icons/ri';
import {BsPencilFill} from 'react-icons/bs';

const Card = ({details}) => {

    let { location, name, image} = details;
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
                    <RiDeleteBinFill id="trash" />
                    <BsPencilFill id="edit" />
                </div>
            </div>
        </div>
    )
}

export default Card;

// https://github.com/rnavaneeth992/csau-react