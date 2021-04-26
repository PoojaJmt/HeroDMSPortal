import React from 'react';
import { Row } from 'simple-flexbox';
import Logo from 'assets/images/Hero-Electric-Bike-Logo-PNG.png';
import './sidebar.css';

function LogoComponent() {
   
    return (
        <Row horizontal='center' vertical='center'>
            <div className="logo-main">
            <img src={Logo}/>
            </div>
           
        </Row>
    );
}

export default LogoComponent;
