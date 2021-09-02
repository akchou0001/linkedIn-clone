import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderMenu from "./HeaderMenu";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useMediaQuery, useTheme } from "@material-ui/core";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const loggout = () => {
    dispatch(logout());
    auth.signOut();
  };
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="header">
      <div className="header__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          class="global-nav__logo"
        >
          <title>LinkedIn</title>

          <g>
            <path
              d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        {/* <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        /> */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderMenu Icon={HomeIcon} title="Home" />
        {!smallScreen && (
          <HeaderMenu Icon={SupervisorAccountIcon} title="My Network" />
        )}
        <HeaderMenu Icon={WorkIcon} title="Jobs" />
        <HeaderMenu Icon={TextsmsRoundedIcon} title="Messaging" />
        {!smallScreen && (
          <HeaderMenu Icon={NotificationsIcon} title="Notifications" />
        )}
        <HeaderMenu
          avatar={user.photoUrl ? user.photoUrl : "broken.jpg"}
          title="Me"
          onClick={loggout}
          child={user.displayName[0]}
        />
      </div>
    </div>
  );
}

export default Header;
