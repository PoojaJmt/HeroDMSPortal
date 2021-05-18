import React, { useContext } from "react";
import { Row } from "simple-flexbox";
import './header.css'
import * as FosIcons from 'react-icons/fa';
import { useSelector } from "react-redux";

function HeaderComponent() {
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);


  return (
    <Row className="header-title">
      {/* <span className={classes.title}>{title}</span> */}                                                
  <h4 style={{ textAlign: "right" }}>Welcome, {LoginData.name}! <a href="/profile-data"><span className="profilecolour"><FosIcons.FaUserCircle className="profileimg" /> Profile</span></a></h4>
    </Row>
  );
}

// HeaderComponent.propTypes = {
//     title: string
// };

export default HeaderComponent;
