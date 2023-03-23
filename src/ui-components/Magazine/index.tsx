import React from "react";
import "./Magazine.style.css";
import { Button } from "react-bootstrap";

const Magazine: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="book">
        <div className="back"></div>
        <div className="page6">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Button className="text-center">Order</Button>
          </div>
        </div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front text-white">
          <div className="side bg-primary">
            <h4 style={{ paddingLeft: "24px", paddingTop: "100px" }}>
              {title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
