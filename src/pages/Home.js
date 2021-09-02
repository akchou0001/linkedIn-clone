import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="home_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widget />
      </div>
    </div>
  );
}

export default Home;
