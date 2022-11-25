
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';
import TextCard from './components/Card/TextCard';
import Postform from './components/Postform';
import { useEffect, useState } from 'react';
import { data } from './data';
import axios from 'axios';
import Editform from './components/Editform';

const App = () => {

  const [posts, setPosts] = useState(data);

  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("add");
  const [editPost, setEditPost] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:9000/posts")
    .then((response) => {
      if(response.status == 200) {
        setPosts(response.data);
      } else {
        alert("error getting posts");
      }
    })
    .catch((err) => {
      console.log(err);
      alert("error getting posts");
    })
  }, [count]);

  return (
    <>
    <div className="App">
      <div>
        <Navbar setShowModal={setShowModal} />
        <div className='cards'>
          {
            posts.map((elem) => {
              if(elem.postType == 'image') {
                return <Card setCount={setCount} setEditPost={setEditPost} setShowModal={setShowModal} setFormType={setFormType} details={elem} />
              }
              return <TextCard setCount={setCount} setEditPost={setEditPost} setShowModal={setShowModal} setFormType={setFormType} details={elem}  />
            })
          }
          {/* <Card name="Gautham" location="CEG" />
          <Card name="Surya" location="CEG" />
          <Card name="Vishaal" location="CEG" />
          <TextCard />
          <TextCard /> */}
        </div>
      </div>
    </div>
    {
      formType==="add" && showModal 
      ? 
        <Postform setCount={setCount} setShowModal={setShowModal} setPosts={setPosts} posts={posts} />
      :
      <></>
    }
    {
      formType==="edit" && showModal 
      ? 
        <Editform setCount={setCount} editPost={editPost} setShowModal={setShowModal} setPosts={setPosts} posts={posts} />
      :
      <></>
    }
    </>
  );
}

export default App;
