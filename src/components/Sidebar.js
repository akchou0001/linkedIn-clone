import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src={user.photoUrl}
          alt={user.displayName}
        >
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <div className="sidebar__statText">
            <p>Connections</p>
            <span>Grow your Network</span>
          </div>
          <p className="sidebar__statCount">50</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statCount">16</p>
        </div>
      </div>
      <div className="sidebar__extras">
        <div className="sidebar__statText">
          <p>Access exclusive tools & insights</p>
          <span>Try Premium for free</span>
        </div>
      </div>
      <div className="sidebar__item">
        <BookmarkIcon />
        <p>My Items</p>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("webdevelopment")}
        {recentItem("javascript")}
        {recentItem("html5")}
        {recentItem("mysql")}
        <p></p>
        <p className="sidebar__bottomBlue">Groups</p>
        <div className="sidebar__bottomEvents">
          <p className="sidebar__bottomBlue">Events</p>
          <button>+</button>
        </div>
        <p className="sidebar__bottomBlue">Followed Hashtags</p>
        {recentItem("webdevelopment")}
        {recentItem("javascript")}
        {recentItem("css3")}
      </div>
    </div>
  );
}

export default Sidebar;
