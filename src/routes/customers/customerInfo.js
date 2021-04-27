import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import "./customer.css";
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
function CustomerInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Row>
        <Col xl="9">
          <h4>Customers</h4>
        </Col>

        <Col xl="3">
          <button className="refresh-btn">
            <i className="fa fa-refresh"></i> Reload
          </button>
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
          <TabPanel value={value} index={0} className="customer-info-page">
            <Container>
              <Row>
                <Col md="6">
                  <Link to="/customer-details">
                    <div className="customer-info-box">
                      <Row>
                        <Col md="6" className="customer-info-box-left">
                          <p>Product Name</p>
                          <p>Product Price</p>
                          <p>Product Date</p>
                          <p>Model Color</p>
                        </Col>
                        <Col md="6" className="customer-info-box-right">
                          <p>Flash E5</p>

                          <p>$55,100</p>
                          <p>20/04/2021</p>
                          <p>Silver</p>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </Col>
                <Col md="6">
                  <Link to="/customer-details">
                    <div className="customer-info-box">
                      <Row>
                        <Col md="6" className="customer-info-box-left">
                          <p>Product Name</p>
                          <p>Product Price</p>
                          <p>Product Date</p>
                          <p>Model Color</p>
                        </Col>
                        <Col md="6" className="customer-info-box-right">
                          <p>Flash E5</p>

                          <p>$55,100</p>
                          <p>20/04/2021</p>
                          <p>Silver</p>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </Col>
                <Col md="6">
                  <Link to="/customer-details">
                    <div className="customer-info-box">
                      <Row>
                        <Col md="6" className="customer-info-box-left">
                          <p>Product Name</p>
                          <p>Product Price</p>
                          <p>Product Date</p>
                          <p>Model Color</p>
                        </Col>
                        <Col md="6" className="customer-info-box-right">
                          <p>Flash E5</p>

                          <p>$55,100</p>
                          <p>20/04/2021</p>
                          <p>Silver</p>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </Col>
                <Col md="6">
                  <Link to="/customer-details">
                    <div className="customer-info-box">
                      <Row>
                        <Col md="6" className="customer-info-box-left">
                          <p>Product Name</p>
                          <p>Product Price</p>
                          <p>Product Date</p>
                          <p>Model Color</p>
                        </Col>
                        <Col md="6" className="customer-info-box-right">
                          <p>Flash E5</p>

                          <p>$55,100</p>
                          <p>20/04/2021</p>
                          <p>Silver</p>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </Col>
                
              </Row>
            </Container>
          </TabPanel>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerInfo;
