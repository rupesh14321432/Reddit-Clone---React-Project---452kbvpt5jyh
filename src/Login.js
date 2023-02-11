// import React,{useRef} from "react";
// import App from "./App";

// const Login=()=>{

//         const email=useRef()
//         const password=useRef()
//         // const getemail=localStorage.getItem("emaildata")
//         // const getpassword=localStorage.getItem("passworddatt")
//     const onsubmithandle=()=>{
//         if(email.current.value=="rupesh1234@gmail.com" && password.current.value=="12345678"){
//             localStorage.setItem("emaildata","rupesh1234@gmail.com")
//             localStorage.setItem("passworddata","12345678")
//         }
//     }
//     return(
// <>      <div className="logdiv" >


//         <form onSubmit={onsubmithandle}>
//             <div>
//                 <input className="loginput" type="email" ref={email}/>
//                 </div>
//                 <br></br>
//                 <div>
//                 <input className="loginput" type="password" ref={password}/>
//                 </div>
//                 <br></br>
//                 <button className="logbutton">log in</button>

//         </form>

//         </div>

// </>

//     )
// }
// export default Login
//import React, { useEffect } from 'react';
// import { useHistory } from "react-router-dom";

import { useRef, useState } from 'react';
// import Createpost from './Createpost';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router';
import './login.css'
//import Mainpage from './Mainpage';
//import Createpost from './Createpost';
//import { Link } from 'react-router-dom';

// function Login() {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         email: "",
//         password: ""
//     });

//     const handlelogin=(e) => {
//         e.preventDefault();
//         const loggeduser = JSON.parse( localStorage.getItem("loginDetails"));
//         console.log(loggeduser);

//         loggeduser.filter((ele, id) => {
//             if(input.email === ele.email && input.password === ele.password) {
//                 navigate("/");
//                 // console.log("login")
//             }
//             // if (input.email !== ele.email || input.password !== ele.password) {
//             //     alert("wrong email or password");
//             // }
//         })


// localStorage.setItem("user", JSON.stringify(input));
// navigate("/");
// };y

function Login() {
    const email = useRef()
    const password = useRef()
    // const  getemail=localStorage.getItem("getdata")
    // const  getpassword=localStorage.getItem("getpassword")
    // const [showmain, setshowmain] = useState(false)
    // const localsingup = localStorage.getItem("Sign In")
    // useEffect(() => {
    //     if (localsingup) {
    //         setshowmain(!showmain)
    //     }
    // })

    // const Home = () => {
    //    
        const handlelogin = () => {
            if (email.current.value == "abc@gmail.com" && password.current.value == "12345") {
                localStorage.setItem("email", "abc@gmail.com")
                localStorage.setItem("password", "12345")

            }
        }
    

    return (
        <>

            <div className='Login' >
               
                {/* {getemail&&getpassword?
                <Createpost/>: */}
                <div className='LoginContainer'>
                    <form  >
                        <input type="email" placeholder='Your Email' ref={email} ></input>
                        <input type="password" placeholder='Your Password' ref={password}></input>
                       <Link to='/Searchbar'>
                        <button className='LoginButton' onClick={handlelogin}>Sign In</button>
                        </Link>
                    </form>
                       

                </div>
                {/* } */}

            </div>
           

        </>
    )
}

export default Login
