import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { slide as Menu } from 'react-burger-menu';

const getMenuStyles = ({ theme }) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 30,
        top: 25,
        zIndex: 19
    },
    bmBurgerBars: {
        background: theme.color.veryDarkGrayishBlue
    },
    bmBurgerBarsHover: {
        background: theme.color.darkRed
    },
    bmCrossButton: {
        display: 'none'
    },
    bmCross: {
        background: theme.color.grayishBlue3
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30
    },
    bmMenu: {
        background: "#e42126"
    },
    bmItem: {
        outline: 'none',
        color:'#fff',
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: theme.color.veryDarkGrayishBlue
    },
    bmOverlay: {
        background: '#000000',
        zIndex: 20,
        opacity:0.5
    }
});

function MenuComponent({ children, isMobile }) {
    const theme = useTheme();
    const menuStyles = getMenuStyles({ theme });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
