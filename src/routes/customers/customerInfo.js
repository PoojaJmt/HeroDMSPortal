import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Table,
  Tabs, Tab
} from "react-bootstrap";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import "./customer.css";


function CustomerInfo() {
  
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
        
        <Tabs
            defaultActiveKey="info"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="info" title="Info">
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
            </Tab>
            </Tabs>
         
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerInfo;
