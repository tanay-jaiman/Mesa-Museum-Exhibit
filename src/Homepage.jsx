import * as React from "react";
import './Homepage.css';


const Homepage = () => {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://img.freepik.com/premium-photo/black-white-texture-background-paper-vintage-design_213524-624.jpg?w=2000"
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            Famous Faces and
            <br />
            Places of Mesa
          </div>
          <div className="div-4">Start exploring</div>
          
        </div>
      </div>
    </>
  );
}

export default Homepage