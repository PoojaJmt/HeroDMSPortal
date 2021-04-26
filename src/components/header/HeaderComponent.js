import React, { useContext } from "react";
import { Row } from "simple-flexbox";
import './header.css'

function HeaderComponent() {
  // let title;
  // switch (true) {
  //     case currentItem === SLUGS.home:
  //         title = 'Home';
  //         break;
  //     case [SLUGS.overview, SLUGS.overviewTwo, SLUGS.overviewThree].includes(currentItem):
  //         title = 'Overview';
  //         break;

  //     default:
  //         title = '';
  // }

  return (
    <Row className="header-title">
      {/* <span className={classes.title}>{title}</span> */}
      <h4 style={{ textAlign: "right" }}>Welcome, Ankur Garg</h4>
    </Row>
  );
}

// HeaderComponent.propTypes = {
//     title: string
// };

export default HeaderComponent;
