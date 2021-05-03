import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderInvoices from "./orderinvoices";

import "../customers/customer.css";

function OrderDetails() {
  return (
    <Container fluid>
      <Row>
        <Col xl="9">{/* <h4>Customers</h4> */}</Col>

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
                  <Col md={3}>
                    <p className="heading">Order Number</p>
                    <p className="subline">OD-12345</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Order Date</p>
                    <p className="subline">27/12/2021</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Order Created By</p>
                    <p className="subline">abc</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Order Status</p>
                    <p className="subline">Open</p>
                  </Col>
                  <Col md={3}>
                    <p className="heading">Order Stage</p>
                    <p className="subline">Confirm with 25% payment</p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <p className="heading">Requested Date of Delivery</p>
                    <p className="subline">30/12/2021</p>
                  </Col>
                  <Col md={3}>
                    <p className="heading">Remarks</p>
                    <p className="subline">with footmats</p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <p className="heading">Total Quantity</p>
                    <p className="subline">40</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Gross Amount</p>
                    <p className="subline">₹ 50,000</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Total Tax</p>
                    <p className="subline">₹ 12900</p>
                  </Col>
                  <Col md={3}>
                    <p className="heading">
                      Total Amount Payable (Incl. Taxes)
                    </p>
                    <p className="subline">₹ 51,290</p>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="orderlines" title="Order Lines">
              <div
                className="tabspadding"
                style={{ width: "100%", textAlign: "center" }}
              >
                <TableContainer component={Paper}>
                  <Table className="customer-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Order Lines No.</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>NDP</TableCell>
                        <TableCell>color</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Gross Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link to="#">OD-12345</Link>
                        </TableCell>
                        <TableCell>Optima</TableCell>
                        <TableCell>$ 40,000</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>$ 80,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link to="#">OD-12345</Link>
                        </TableCell>
                        <TableCell>Zion</TableCell>
                        <TableCell>$ 40,000</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>$ 80,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Tab>
            <Tab eventKey="invoices" title="Invoices">
              <OrderInvoices />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetails;
