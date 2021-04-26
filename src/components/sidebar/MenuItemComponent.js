import React from "react";
import { any, arrayOf, func, string } from "prop-types";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import CollapsibleContent from "components/collapsible/CollapsibleContent";
import { useSidebar } from "hooks/useSidebar";

const useStyles = createUseStyles({
  activeContainer: {
    backgroundColor: "#ffffff",
    color: "#E42126",
  },
  container: {
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    paddingLeft: ({ level }) => 32 * level,
    transition: "all 0.2s ease-in-out",
    paddingTop:"15px",
    paddingBottom:"15px"
  },

  title: {
    fontSize: 16,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: ({ isActive }) => (isActive ? "#E42126" : "#ffffff"),
    marginLeft: 24,
  },
});

function MenuItemComponent({
  children,
  icon,
  id,
  items = [],
  level = 1,
  onClick,
  title,
}) {
  const theme = useTheme();
  const isCollapsible = children && children.length > 0;
  const { isExpanded, isActive, onItemClick } = useSidebar({
    isCollapsible,
    item: id,
    items,
  });
  const classes = useStyles({ theme, level, isActive });
  const classNameColumn = isActive ? classes.leftBar : "";
  const classNameContainer = [
    classes.container,
    isActive && classes.activeContainer,
  ].join(" ");
  const iconColor = isActive ? "#E42126" : "#ffffff";

  function onItemClicked(e) {
    if (onClick) {
      onClick(e);
    }
    onItemClick();
  }

  return (
    <Column key={id} className={classNameColumn}>
      <Row
        vertical="center"
        onClick={onItemClicked}
        className={`${classNameContainer} menuitem`}
      >
        <i className={icon} style={{color:iconColor}}/>
        <span className={classes.title}>{title}</span>
      </Row>
      <div className="outl"></div>
      {isCollapsible && (
        <CollapsibleContent expanded={isExpanded}>
          {children.map((child) => child.type({ ...child.props }))}
        </CollapsibleContent>
      )}
    </Column>
  );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
  children: any,
  icon: any,
  id: string,
  onClick: func,
  items: arrayOf(string),
  title: string,
};

export default MenuItemComponent;
