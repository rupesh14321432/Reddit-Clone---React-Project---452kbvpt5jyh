import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Linkcreatepost from "./Linkcreatepost"


  function Createpost(){

    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Linkcreatepost/>} />
          </Routes>
        </BrowserRouter>
        {/* <button>Log out</button> */}
        </>
    )
  }
  export default Createpost;