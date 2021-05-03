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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import "./customer.css";

function CustomerDetails() {
  
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
            defaultActiveKey="details"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="details" title="Details">
            <Container className="invoice-dtl">
              <br />
              <Row>
                <Col md={2}>
                  <p className="heading">First Name</p>
                  <p className="subline">Sukhbir</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Last Name</p>
                  <p className="subline">Kaur</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Contact No.</p>
                  <p className="subline">9876543210</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Customer Email</p>
                  <p className="subline">sukhbir@gmail.com</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Address</p>
                  <p className="subline">Noida</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={2}>
                  <p className="heading">Customer GSTIN No.</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Online Order Number</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Reference No.</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Tally No.</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Delivery Date</p>
                  <p className="subline">24/09/2021</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Remarks</p>
                  <p className="subline">*****</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={2}>
                  <p className="heading">Product Purchased</p>
                  <p className="subline">Zion</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Total Amount Payable</p>
                  <p className="subline">₹500</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Model Color</p>
                  <p className="subline">Red</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Chassis No.</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Motor No.</p>
                  <p className="subline">****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Battery No.</p>
                  <p className="subline">*****</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={2}>
                  <p className="heading">Charger No.</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Make of Battery</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Type of Battery</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Capacity of each Battery</p>
                  <p className="subline">*****</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Financier Name</p>
                  <p className="subline">Wheels EMI</p>
                </Col>
                <Col md={2}>
                  <p className="heading">Other Financier Name</p>
                  <p className="subline">*****</p>
                </Col>
              </Row>
              <br />

              <Row>
                <Col md={8}>
                  <p className="heading">
                    Aadhar Card(Front & Back)/Voter ID/PAN Card/Driving
                    Licence/GST Registration Certificate(for B2B)
                  </p>
                  <p className="subline">
                    <Link to="/">View</Link>
                  </p>
                </Col>
                <Col md={4}>
                  <p className="heading">Dealer Invoice</p>
                  <p className="subline">
                    <Link to="/">View</Link>
                  </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={8}>
                  <p className="heading">Insurance/RC/Tax Token</p>
                  <p className="subline">
                    <Link to="/">View</Link>
                  </p>
                </Col>
                <Col md={4}>
                  <p className="heading">
                    Customer Acknowledgement(In case of subsidy)
                  </p>
                  <p className="subline">
                    <Link to="/">View</Link>
                  </p>
                </Col>
              </Row>
              <br />
            </Container>
       </Tab>


       <Tab eventKey="offer" title="Offer Applied">
            <Container className="invoice-dtl">
              <Row>
                <Col md="6">
                  <div className="customer-info-box">
                    <Row>
                      <Col md="6" className="customer-info-box-left">
                        <p>Scheme Name</p>
                        <p>Scheme Amount</p>
                      </Col>
                      <Col md="6" className="customer-info-box-right">
                        <p>"Humsafar Offer"</p>
                        <p>₹4000</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md="6">
                  <div className="customer-info-box">
                    <Row>
                      <Col md="6" className="customer-info-box-left">
                        <p>Scheme Name</p>
                        <p>Scheme Amount</p>
                      </Col>
                      <Col md="6" className="customer-info-box-right">
                        <p>"Humsafar Offer"</p>
                        <p>₹4000</p>
                      </Col>
                    </Row>
                  </div>
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

export default CustomerDetails;
