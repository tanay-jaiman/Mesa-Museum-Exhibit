import * as React from "react";

const Homepage = () => {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="..."
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
      <style jsx>{`
        .div {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 1080px;
          align-items: center;
          justify-content: center;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-2 {
          position: relative;
          display: flex;
          margin-top: 174px;
          width: 1245px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-top: 40px;
          }
        }
        .div-3 {
          color: #000;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -4px;
          font: italic 400 200px/240px IM FELL English, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            font-size: 40px;
            line-height: 53px;
          }
        }
        .div-4 {
          font-feature-settings: "clig" off, "liga" off;
          align-items: center;
          border-radius: 8px;
          box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #3d3630;
          align-self: center;
          margin-top: 103px;
          width: 598px;
          max-width: 100%;
          color: #fff;
          justify-content: center;
          padding: 24px 60px;
          font: 700 40px/130% Inria Serif, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Homepage