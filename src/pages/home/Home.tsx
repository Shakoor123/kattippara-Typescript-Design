import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="cardwrapper">
            <div className="homecards">
              <Link to={"/product/123"}>
                <Card />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
