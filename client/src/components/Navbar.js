function Navbar(props) {

    let {setShowModal} = props;
    // console.log(setShowModal);

    return (
        <div className="navbar">
            <div className="logo">
                <div>
                    <img src={'ig_short.png'}  alt="Instagram" />
                </div>
                <div>
                    <img src={'ig_long.png'} alt="Instagram" />
                </div>
            </div>
            <div className="icons">
                <div>
                    <img src={'home.png'} alt="Home" />
                </div>
                <div>
                    <img src={'search.png'} alt="Search" />
                </div>
                <div>
                    <img src={'heart.png'} alt="Like" />
                </div>
                <div>
                    <img src={'send.png'} alt="Send" />
                </div>
            </div>
            <button type="button" className="post-btn" onClick={() => setShowModal(true)}>
                Add new post
            </button>
        </div>
    )
}

export default Navbar;