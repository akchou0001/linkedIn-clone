import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  const links = (title) => (
    <div className="footer_links">
      <p>{title}</p>
    </div>
  );
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          LinkedIn Clone
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <div className="sidebar_right">
      <div className="widget">
        <div className="widget_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("ReactJS is Awesome!", "Coding- 900 readers.")}
        {newsArticle("Tesla hist new hits!", "Cars & Auto- 800 readers.")}
        {newsArticle("DodgeCoin to the Moon!", "Crypto- 700 readers")}
      </div>
      <div className="footer">
        <div className="lines">
          {links("About")}
          {links("Accessibility")}
          {links("Help Center")}
        </div>
        <div className="lines">
          {links("Privacy & Terms")}
          {links("Ad Choice")}
        </div>
        <div className="lines">
          {links("Get the LinkedIn app")}
          {links("More")}
        </div>
        <Copyright />
      </div>
    </div>
  );
}

export default Widget;
