import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import background from "../../assets/background.jpg";
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
