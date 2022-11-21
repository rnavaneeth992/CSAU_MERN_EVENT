
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';
import TextCard from './components/Card/TextCard';
import Postform from './components/Postform';
import { useState } from 'react';
import { data } from './data';

const App = () => {

  const [posts, setPosts] = useState(data);

  const [showModal, setShowModal] = useState(false);

  // var a = 10;
  // console.log(a);

  // let a;
  // a= 10;
  // const b = 10;

  // const sample = (a, b) =>  a + b;
  // console.log(sample(1,2));

  // let obj = { a: 1, b: 2 };
  // let { a: var1, b: var2 } = obj;

  // console.log(var1, var2)

  // let arr = [1, 2];
  // let [a, b] = arr;

  // console.log(a, b)

  return (
    <>
    <div className="App">
      <div>
        <Navbar setShowModal={setShowModal} />
        <div className='cards'>
          {
            posts.map((elem) => {
              if(elem.postType == 'image') {
                return <Card details={elem} />
              }
              return <TextCard details={elem}  />
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
      showModal 
      ? 
        <Postform setShowModal={setShowModal} setPosts={setPosts} posts={posts} />
      :
      <></>
    }
    </>
  );
}

export default App;
