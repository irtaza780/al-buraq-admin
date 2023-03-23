import React from "react";
import backgroundImage from "../../assets/main-bg.jpg";
import { Row, Col } from "react-bootstrap";
import "./Homepage.style.css";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import InsertChartTwoToneIcon from "@mui/icons-material/InsertChartTwoTone";
import FormatPaintTwoToneIcon from "@mui/icons-material/FormatPaintTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
};

const textStyle = {
  paddingTop: "14rem",
};

const HomePage = () => {
  return (
    <>
      <div style={backgroundStyle}>
        <div style={textStyle}>
          <p className="fs-1 fw-bold text-center text-white">
            Bringing your ideas to
            <br /> life
            <span className="text-primary fw-bold">.</span>
          </p>
          <p className="fs-2 text-center text-white">Al-Buraq Printing Press</p>
        </div>
        <div className="mt-5 d-flex justify-content-center mx-2 text-primary">
          <button className="homepage-btn ">
            <ArticleTwoToneIcon className="mb-3" /> <br />
            Magazine Covers
          </button>
          <button className="homepage-btn ">
            <InsertChartTwoToneIcon className="mb-3" /> <br />
            Portfolios
          </button>
          <button className="homepage-btn ">
            {" "}
            <FormatPaintTwoToneIcon className="mb-3" /> <br />
            Posters
          </button>
          <button className="homepage-btn ">
            <MenuBookTwoToneIcon className="mb-3" />
            <br /> Novels
          </button>
          <button className="homepage-btn ">
            <NewspaperTwoToneIcon className="mb-3" />
            <br /> Newspaper
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
