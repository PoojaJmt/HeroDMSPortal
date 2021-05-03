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

import "../customers/customer.css";

function InvoiceDetails() {
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
            <Tab eventKey="details" title="Invoice Info">
              <Container className="invoice-dtl">
                <br />
                <Row>
                  <Col md={3}>
                    <p className="heading">Invoice Lines Number</p>
                    <p className="subline">INV-12345</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Total Amount</p>
                    <p className="subline">$40,000</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">CGST</p>
                    <p className="subline">---</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">SGST</p>
                    <p className="subline">---</p>
                  </Col>
                  <Col md={3}>
                    <p className="heading">IGST</p>
                    <p className="subline">2.5%</p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <p className="heading">Total Amount Payable (Incl. Taxes)</p>
                    <p className="subline">$ 50,000</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">TCS</p>
                    <p className="subline">$1350</p>
                  </Col>
                  <Col md="2">
                  <p className="heading">Grand Total</p>
                    <p className="subline">$21345</p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={3}>
                    <p className="heading">Delivery No.</p>
                    <p className="subline">012345678</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Mode of Transport</p>
                    <p className="subline">Amar Carriers</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">Vehicle/Container No.</p>
                    <p className="subline">HR5512345</p>
                  </Col>
                  <Col md={2}>
                    <p className="heading">
                      G.R/L.R. No.
                    </p>
                    <p className="subline">1231</p>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col md={6}>
                    <p className="heading">Ship to Party Address</p>
                    <p className="subline">Groud Floor - 0123 South Delhi</p>
                  </Col>
                  </Row>
              </Container>
            </Tab>
            <Tab eventKey="orderlines" title="Invoice Lines">
              <div
                className="tabspadding"
                style={{ width: "100%", textAlign: "center" }}
              >
                <TableContainer component={Paper}>
                  <Table className="customer-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Invoice Lines No.</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Rate</TableCell>
                        <TableCell>Total Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link to="#">Inv-12345</Link>
                        </TableCell>
                        <TableCell>Optima</TableCell>
                      
                        <TableCell>Black</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>$ 80,000</TableCell>
                        <TableCell>$ 80,0000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link to="#">Inv-12345</Link>
                        </TableCell>
                        <TableCell>Optima</TableCell>
                      
                        <TableCell>Black</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>$ 80,000</TableCell>
                        <TableCell>$ 80,0000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Tab>
           
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceDetails;
