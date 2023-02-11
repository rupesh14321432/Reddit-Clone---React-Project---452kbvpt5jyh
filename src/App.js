// import React from "react"
// import{BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from "./Navbar";
// import Login from './Login';
// import Mainpage from "./Mainpage";
// import Linkcreatepost from "./Linkcreatepost";
// import Searchbar from "./Searchbar";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";
// import Page5 from "./Page5";

// function App() {

 
 
//   return (    
//       <>
//       <BrowserRouter>
      
//         <Routes>
//           <Route path="/" element={<Navbar/>}></Route>
//           <Route path='/Login' element={<Login/>}>Login</Route>
//           <Route path='/Searchbar' element={[<Navbar/>,<Searchbar/>]}>Searchbarf</Route>
//           <Route path='/Linkcreatepost' element={[<Navbar/>,<Linkcreatepost/>]}>redirect</Route>
//           {/* <Route path="/Mainpage" element={<Mainpage/>} ></Route> */}
//         </Routes>
       
//       </BrowserRouter>
     
//       <Mainpage/> 
//       <Page2/>
//       <Page3/>
//       <Page4/>
//       <Page5/>
//       {/* <Searchbar/> */}
      
    
//     </>
    
    
//   //.add
    
//   );
// }

// export default App;

















import React from 'react'
import { useState , useEffect} from 'react';
import './styles/App.css'
import { PostDetail } from './PostDetail';
import LoginForm from './Signup';
const App = ({detail}) => {

  const [post, setPost] = useState(false);
  const [logindata,setLogindata] = useState(false)
  const [mydata,setMydata] = useState();

  useEffect(()=>{
            const getData = localStorage.getItem("postdetail");
            if(getData){
                setMydata(JSON.parse(getData));
            }
            },[detail])
    
         function upvote(key){
          const user = JSON.parse(sessionStorage.getItem("user"));
          if(user == null){
          return alert("Login to Upvote");
          }
            const data = localStorage.getItem("postdetail");
            const data1 = JSON.parse(data);
            if (data1) {
               data1[key].upvote = data1[key].upvote+1;
             //  console.log(data1);
                localStorage.setItem("postdetail", JSON.stringify(data1));
             }
          //  console.log(data1);
         }
         function downvote(key){
          const user = JSON.parse(sessionStorage.getItem("user"));
          if(user == null){
          return alert("Login to Downvote");
          }
            const data = localStorage.getItem("postdetail");
            const data1 = JSON.parse(data);
            if (data1) {
               data1[key].downvote = data1[key].downvote-1;
            //   console.log(data1);
                localStorage.setItem("postdetail", JSON.stringify(data1));
             }
         }


  return (
    <div id="main" className='main'>
      <nav className='nav-bar'>
            <button type='button' className='btn'
              onClick={()=>{setLogindata(true)
             }}>Login</button>
            <button type='button' className='btn' onClick={()=>{

               const data = JSON.parse(sessionStorage.getItem("user"));
               if(data == null){
               return alert("Login to add post");
               }

              setPost(true)}}> Add new post</button>
             
        </nav>
      <main>
        <div className='parent'>
          {post && <PostDetail onClick={() => setPost(false)} />}
          {logindata && <LoginForm onClick={() => setLogindata(false)} />}
          {
            mydata && mydata.map((ele, index) => {
              return <>
                <div className='child' key={index}>

                  <div className='btn-child'>
                    <div className='shadow'>
                      <button type='button' onClick={() => upvote(index)} className='upBtn'>Upvote</button>
                      <div className='inr-der'>{ele.upvote}</div>
                    </div>
                    <div className='shadow'>
                      <button type='button' className='downbtn' onClick={() => downvote(index)} >Downvote</button>
                      <div className='inr-der'>{ele.downvote}</div>
                    </div>
                  </div>
                  <div className='description'>
                    <h3 className='title'>{ele.title}</h3>
                    <p className='my-post'>{ele.description}</p>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </main>
    </div>
  )
}


export default App;
