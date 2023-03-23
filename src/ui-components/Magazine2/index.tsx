import React from "react";
import "./Magazine2.style.css";

import BookCover2 from "../../assets/book2-cover.jpg";

const Magazine2 = () => {
  return (
    <>
      <div id="handmaid" className="book2">
        <div className="gloss"></div>
        <img className="cover" src={BookCover2} alt="cover" />
        <div className="description">
          {/* <h1 className="title">The Handmaid's Tale</h1> */}
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <blockquote></blockquote>
        </div>
      </div>
    </>
  );
};

export default Magazine2;
