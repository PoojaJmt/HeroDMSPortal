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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./invoices.css";

function InvoiceInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Row>
        <Col xl="5"></Col>
        <Col xl="2">
          <button className="refresh-btn">
            <i className="fa fa-refresh"></i> Reload
          </button>
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
        <Col md={{ span: 4, offset: 8 }}>
          <button className="btn-gen">
            <Link to="/download-invoice" style={{ color: "#fff" }}>
              <i className="fa fa-download"></i> Generate Invoice
            </Link>
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
              <div className="invoice-dtl">
                <h4 className="p-3">ENQ-11022</h4>
                <ul>
                  <li>
                    <h5>First Name</h5>
                    <p>Sukhbir</p>
                  </li>
                  <li>
                    <h5>Last Name</h5>
                    <p>Kaur</p>
                  </li>
                  <li>
                    <h5>Contact Number</h5>
                    <p>9876543219</p>
                  </li>
                  <li>
                    <h5>Customer Email</h5>
                    <p>sukhbir@gmail.com</p>
                  </li>
                  <li>
                    <h5>Address</h5>
                    <p>Noida</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Tally Invoice No.</h5>
                    <p>****</p>
                  </li>
                  <li>
                    <h5>Customer GSTIN No.</h5>
                    <p>****</p>
                  </li>
                  <li>
                    <h5>Online Order No.</h5>
                    <p>9876543219</p>
                  </li>
                  <li>
                    <h5>Reference No.</h5>
                    <p>*****</p>
                  </li>
                  <li></li>
                </ul>
                <ul>
                  <li>
                    <h5>Product Purchased</h5>
                    <p>abc</p>
                  </li>
                  <li>
                    <h5>Total Amount Payable</h5>
                    <p>₹ 5,000</p>
                  </li>
                  <li>
                    <h5>Model Color</h5>
                    <p>black</p>
                  </li>
                  <li>
                    <h5>Chassis No.</h5>
                    <p>NYXJH123</p>
                  </li>
                  <li>
                    <h5>Motor No.</h5>
                    <p>****</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Battery Number</h5>
                    <p>123</p>
                  </li>
                  <li>
                    <h5>Charger Number</h5>
                    <p>123</p>
                  </li>
                  <li>
                    <h5>Make of Battery</h5>
                    <p>****</p>
                  </li>
                  <li>
                    <h5>Capacity of each battery</h5>
                    <p>***</p>
                  </li>
                  <li>
                    <h5>Financier Name</h5>
                    <p>Loan Tap</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Other Financier Name</h5>
                    <p>IDFC Bank</p>
                  </li>
                </ul>
              </div>
            </Tab>

            <Tab eventKey="scheme" title="Scheme">
              <div
                className="invoice-dtl"
                style={{ minHeight: "500px", padding: "40px 0 0 20px" }}
              >
                <div className="scheme-box">
                  <ul>
                    <li>
                      <h5>Scheme Applied</h5>
                    </li>
                    <li>
                      <p>Khushiyon ka Tyoohar</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h5>Total Discount</h5>
                    </li>
                    <li>
                      <p>₹4000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceInfo;
