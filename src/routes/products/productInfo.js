import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import "../schemeclaims/scheme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { StepperNav } from "vertical-stepper-nav";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Form, InputGroup, Table } from "react-bootstrap";

import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Row>
        <Col xl="5"></Col>
        <Col xl="2">
          {/* <button className="refresh-btn">
            <i className="fa fa-refresh"></i> Reload
          </button> */}
        </Col>
        <Col xl="5">
          <Form.Group className="search-customer">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fa fa-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Search here.." />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xl="12">
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Info" {...a11yProps(0)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className="invoice-dtl-tab">
          <Container>
            <br/>
            <Row>
              <Col md={3}>
                <p className="heading">Model</p>
                <p className="subline">Photon</p>
              </Col>
              <Col md={3}>
                <p className="heading">Product Category</p>
                <p className="subline">₹78990</p>
              </Col>
              <Col md={3}>
                <p className="heading">Battery</p>
                <p className="subline">
                 1
                </p>
              </Col>
              <Col md={3}>
                <p className="heading">Battery Type</p>
                <p className="subline">
                 Lithium Ion
                </p>
              </Col>

            </Row><br/>
            <Row>
              <Col md={3}>
                <p className="heading">BLDC Hub Motor(in watt)</p>
                <p className="subline">550 | 1200</p>
              </Col>
              <Col md={3}>
                <p className="heading">Kerb Weight (in kg)</p>
                <p className="subline">75</p>
              </Col>
              <Col md={3}>
                <p className="heading">Range (in kmph)</p>
                <p className="subline">
                 95
                </p>
              </Col>
              <Col md={3}>
                <p className="heading">Ground Clearance (in mm)</p>
                <p className="subline">
                 140
                </p>
              </Col>

            </Row><br/>
            <Row>
              <Col md={3}>
                <p className="heading">Top Speed (in kmph)</p>
                <p className="subline">42</p>
              </Col>
              <Col md={3}>
                <p className="heading">Charging Time (in hrs)</p>
                <p className="subline">3</p>
              </Col>
              <Col md={3}>
                <p className="heading">Battery Capacity (in V|AH)</p>
                <p className="subline">
                 50.4V/40Ah
                </p>
              </Col>
              <Col md={3}>
                <p className="heading">Wheel Size(in inch)</p>
                <p className="subline">
                 12
                </p>
              </Col>

            </Row>
            </Container>
            <br />
          </TabPanel>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductInfo;
