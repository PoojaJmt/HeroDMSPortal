import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useHistory } from "react-router-dom";
import SLUGS from "resources/slugs";
import "font-awesome/css/font-awesome.min.css";
import { convertSlugToUrl } from "resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid #ffffff`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

function SidebarComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isMobile = window.innerWidth <= 1080;

  async function logout() {
    push(SLUGS.login);
  }

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div>
        <LogoComponent />
      </div>
      <MenuItem
        id={SLUGS.home}
        title="Home"
        icon="fa fa-home"
        onClick={() => onClick(SLUGS.home)}
      />
      {/* <MenuItem
                id={SLUGS.overview}
                items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Overview'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.overview}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.overview)}
                />
                <MenuItem
                    id={SLUGS.overviewTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.overviewTwo)}
                />
                <MenuItem
                    id={SLUGS.overviewThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.overviewThree)}
                />
            </MenuItem> */}
      <MenuItem
        id={SLUGS.invoices}
        title="Invoices"
        icon="fa fa-file"
        onClick={() => onClick(SLUGS.invoices)}
      />
      <MenuItem
        title="Customers"
        icon="fa fa-users"
        id={SLUGS.customers}
        onClick={() => onClick(SLUGS.customers)}
      />
      <MenuItem
        title="Orders"
        icon="fa fa-cube"
        id={SLUGS.orders}
        onClick={() => onClick(SLUGS.orders)}
      />
      <MenuItem
        id={SLUGS.scheme}
        title="Scheme Claims"
        icon="fa fa-comments"
        onClick={() => onClick(SLUGS.scheme)}
      />

      <MenuItem
        id={SLUGS.products}
        title="Products"
        icon="fa fa-users"
        onClick={() => onClick(SLUGS.products)}
      />

      <MenuItem
        id={SLUGS.profile}
        title="Complaints"
        icon="fa fa-user"
        onClick={() => onClick(SLUGS.complaints)}
      />
      <MenuItem title="Dashboard" icon="fa fa-graph" />

      <div className={classes.separator}></div>

      <MenuItem id="logout" title="Logout" onClick={logout} />
    </Menu>
  );
}

export default SidebarComponent;
