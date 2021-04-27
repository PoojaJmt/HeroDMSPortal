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

function ComplaintInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
            {/* Complaints */}
        </Col>
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
              <Form.Control type="text" placeholder="Search Complaint No.." />
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
                <p className="heading">Category</p>
                <p className="subline">Product Issue</p>
              </Col>
              <Col md={3}>
                <p className="heading">Sub Category</p>
                <p className="subline">₹78990</p>
              </Col>
              <Col md={3}>
                <p className="heading">Order No.</p>
                <p className="subline">
                 1
                </p>
              </Col>
              <Col md={3}>
                <p className="heading">Invoice No.</p>
                <p className="subline">
                 12345
                </p>
              </Col>

            </Row><br/>
            <Row>
              <Col md={12}>
                <p className="heading">Description</p>
                <p className="subline">Foot mats damaged</p>
              </Col>
             

            </Row><br/>
            <Row>
              <Col md={3}>
                <p className="heading">Images Attached</p>
                <p className="subline"><Link to="/">View</Link></p>
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

export default ComplaintInfo;
