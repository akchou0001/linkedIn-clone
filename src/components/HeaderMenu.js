import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderMenu.css";

function HeaderMenu({ avatar, Icon, title, onClick, child }) {
  return (
    <div onClick={onClick} className="headerMenu">
      {Icon && <Icon className="headerMenu__icon" />}
      {avatar && (
        <Avatar className="headerMenu__icon" src={avatar} alt="Avatar">
          {child}
        </Avatar>
      )}
      <h3 className="headerMenu__title">{title}</h3>
    </div>
  );
}

export default HeaderMenu;
