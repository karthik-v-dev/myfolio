import React from "react";
import SideStick from "../sidestickers";


export default function Footer() {
  return (
    <div className="footer-contaner">
      <div className="d-flex-rowcol">
        <div style={{width:'50%',height:'auto',textAlign:'start'}}>
          <h1 className="my-35">KARTHIK V</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div style={{width:'50%',height:'auto',textAlign:'end'}}>
          <h1 className="m-35">SOCIAL</h1>
          <p>
           <SideStick/>
          </p>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>© Copyright 2022. Made by <a href="/" className="atcopy">KARTHIK V</a></p>
      </div>
    </div>
  );
}
