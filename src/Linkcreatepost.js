//import React from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './linkcreatepost.css'


function Linkcreatepost() {
    const [Mainpage, setMainpage] = useState([])
    let arr = []

    const [input1, setinput1] = useState()
    const [input2, setinput2] = useState()
    const [button1, setbutton1] = useState()
    const [button2, setbutton2] = useState()



    const posts = [
        {
            postedBy: "Kunal",
            postText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            upVotes: 3,
            downVotes: 1
        },
    ];


    arr.push({
        postedBy: button1,
        postText: button2,
    })
    // localStorage.setItem(input1,input2)

    function buttononclick(e) {
        e.preventDefault()
        setbutton1(input1)
        setbutton2(input2)
        localStorage.setItem(input1, input2)

        console.log(arr)
    }


    return (
        <>
            <div className="flexbaladiv">
                <div className="badaDivv">
                    <div className="mainpagev">
                        <form className="formv" >
                            <div>
                                <input className="maintitlev" type="text" placeholder='Title' onChange={(e) => {
                                    setinput1(e.target.value)
                                }} />
                            </div><br></br>
                            <div>

                                <textarea className="textareav" placeholder="Post title" onChange={(e) => {
                                    setinput2(e.target.value)
                                }}></textarea><button onClick={buttononclick}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Linkcreatepost;
