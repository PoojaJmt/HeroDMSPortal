import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Redirect, useHistory } from "react-router-dom";
import SLUGS from "resources/slugs";
import "font-awesome/css/font-awesome.min.css";
import { convertSlugToUrl } from "resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";
import homeIco from "../../assets/images/icons/home.svg";
import {
  IconAgents,
  IconArticles,
  IconContacts,
  IconIdeas,
  IconLogout,
  IconOverview,
  IconSettings,
  IconSubscription,
  IconTickets,
} from "assets/icons";
import { Button } from "react-bootstrap";
import { Row } from "simple-flexbox";
import { LOGOUT } from "redux/constants";
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid #ffffff`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

function SidebarComponent(props) {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const theme = useTheme();
  const classes = useStyles({ theme });
  const isMobile = window.innerWidth <= 1080;
  let history = useHistory();
  const logOut = () => {
    dispatch({ type: LOGOUT});
     history.push('./login')
  };

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <>
      <Menu isMobile={isMobile}>
        <div>
          <LogoComponent />
        </div>
        <MenuItem
          id={SLUGS.home}
          title="Home"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          }
          onClick={() => onClick(SLUGS.home)}
        />

        <MenuItem
          id={SLUGS.invoices}
          title="Invoices"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" />
            </svg>
          }
          onClick={() => onClick(SLUGS.invoices)}
        />
        <MenuItem
          title="Customers"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          }
          id={SLUGS.customers}
          onClick={() => onClick(SLUGS.customers)}
        />
        <MenuItem
          title="Orders"
          icon={
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <g>
                    <path d="M403.505,14.385C398.373,5.512,388.819,0,378.576,0h-107.06v126.637h196.913L403.505,14.385z" />
                    <path d="M241.505,0h-108.07c-10.264,0-19.817,5.522-24.949,14.415L43.801,126.637h197.703V0z" />
                    <path
                      d="M33.057,156.648v320.069C33.057,496.174,48.893,512,68.35,512H443.65c19.457,0,35.293-15.826,35.293-35.283V156.648
				H33.057z M324.115,291.248l-77.609,77.609c-2.931,2.931-6.773,4.402-10.614,4.402s-7.683-1.471-10.604-4.402l-36.383-36.374
				c-5.852-5.852-5.852-15.356,0-21.218c5.862-5.862,15.366-5.862,21.228,0l25.76,25.77l67.005-67.005
				c5.862-5.862,15.366-5.862,21.218,0C329.978,275.892,329.978,285.386,324.115,291.248z"
                    />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          }
          id={SLUGS.orders}
          onClick={() => onClick(SLUGS.orders)}
          // onClick={() => onClick(SLUGS.ordersList)}
        />
        <MenuItem
          id={SLUGS.scheme}
          title="Scheme Claims"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
            </svg>
          }
          onClick={() => onClick(SLUGS.scheme)}
        />

        <MenuItem
          id={SLUGS.products}
          title="Products"
          icon={
            <svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m256 293.264c-21.413 0-38.834 17.42-38.834 38.833v141.069c0 21.413 17.421 38.834 38.834 38.834s38.834-17.421 38.834-38.834v-141.069c0-21.413-17.421-38.833-38.834-38.833z" />
                <ellipse
                  cx="256"
                  cy="41.81"
                  rx="41.81"
                  ry="41.81"
                  transform="matrix(.973 -.23 .23 .973 -2.758 59.935)"
                />
                <path d="m286.711 113.621h-61.422c-44.623 0-80.925 36.303-80.925 80.925v199.057l42.803 22.671v-84.176c0-37.955 30.879-68.833 68.834-68.833s68.834 30.878 68.834 68.833v87.801l42.803-25.748v-199.605c-.001-44.623-36.304-80.925-80.927-80.925z" />
                <path d="m184.19 41.81c0-5.144.555-10.159 1.588-15h-67.404v30h67.404c-1.033-4.841-1.588-9.856-1.588-15z" />
                <path d="m326.223 26.81c1.033 4.841 1.588 9.856 1.588 15s-.555 10.16-1.588 15h67.403v-30z" />
              </g>
            </svg>
          }
          onClick={() => onClick(SLUGS.products)}
        />

        <MenuItem
          id={SLUGS.profile}
          title="Complaints"
          icon={
            <svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m346 0c-90.981 0-165 75.019-165 166s74.019 165 165 165 166-74.019 166-165-75.019-166-166-166zm51.211 196-21.211 21.211-30-30-30 30-21.211-21.211 30-30-30-30 21.211-21.211 30 30 30-30 21.211 21.211-30 30z" />
                <path d="m151 397.211-51.211-51.211 21.211-21.211 30 30 54.448-54.448c-30.059-31.439-49.958-72.686-53.652-118.621-84.343 7.24-151.796 78.092-151.796 164.28 0 90.981 75.019 166 166 166 86.188 0 157.04-67.453 164.28-151.797-38.438-3.091-73.405-17.758-102.328-39.944z" />
              </g>
            </svg>
          }
          onClick={() => onClick(SLUGS.complaints)}
        />

        <MenuItem
          title="Dashboard"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
            </svg>
          }
          onClick={() => onClick(SLUGS.DashboardComponent)}
        />

        <div className={classes.separator}></div>

        {/* <MenuItem id="logout" title="Logout" onClick={logout} /> */}
        <Row horizontal="center" vertical="center">
          <div className="logout-btn">
            <button onClick={() => logOut()}>Logout</button>
          </div>
        </Row>
      </Menu>
    </>
  );
}

export default SidebarComponent;
