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

function InvoiceInfo(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      {/* <Row>
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
      </Row> */}
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
              {props.location.state.invoice && 
              <div className="invoice-dtl">
                <h4 className="p-3">{props.location.state.invoice.name}</h4>
                <ul>
                  <li>
                    <h5>First Name</h5>
                    <p>{props.location.state.invoice.first_name__c}</p>
                  </li>
                  <li>
                    <h5>Last Name</h5>
                    <p>{props.location.state.invoice.last_name__c}</p>
                  </li>
                  <li>
                    <h5>Contact Number</h5>
                    <p>{props.location.state.invoice.contact_number__c}</p>
                  </li>
                  <li>
                    <h5>Customer Email</h5>
                    <p>{props.location.state.invoice.email_id__c}</p>
                  </li>
                  <li>
                    <h5>Address</h5>
                    <p>{props.location.state.invoice.address_line_1}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Tally Invoice No.</h5>
                    <p>{props.location.state.invoice.tally_invoice_no__c}</p>
                  </li>
                  <li>
                    <h5>Customer GSTIN No.</h5>
                    <p>{props.location.state.invoice.customer_gstin_no__c}</p>
                  </li>
                  <li>
                    <h5>Online Order No.</h5>
                    <p>{props.location.state.invoice.online_order_no__c}</p>
                  </li>
                  <li>
                    <h5>Reference No.</h5>
                    <p>{props.location.state.invoice.reference_no__c}</p>
                  </li>
                  <li></li>
                </ul>
                <ul>
                  <li>
                    <h5>Product Purchased</h5>
                    <p>{props.location.state.invoice.product__c}</p>
                  </li>
                  <li>
                    <h5>Total Amount Payable</h5>
                    <p>₹ {props.location.state.invoice.total_amount_payable__c}</p>
                  </li>
                  <li>
                    <h5>Model Color</h5>
                    <p>{props.location.state.invoice.model_color__c}</p>
                  </li>
                  <li>
                    <h5>Chassis No.</h5>
                    <p>{props.location.state.invoice.chassis_no__c}</p>
                  </li>
                  <li>
                    <h5>Motor No.</h5>
                    <p>{props.location.state.invoice.motor_no__c}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Battery Number</h5>
                    <p>{props.location.state.invoice.battery_no__c}</p>
                  </li>
                  <li>
                    <h5>Charger Number</h5>
                    <p>{props.location.state.invoice.charger_no__c}</p>
                  </li>
                  <li>
                    <h5>Make of Battery</h5>
                    <p>{props.location.state.invoice.make_of_battery__c}</p>
                  </li>
                  <li>
                    <h5>Capacity of each battery</h5>
                    <p>{props.location.state.invoice.capacity_of_each_battery__c}</p>
                  </li>
                  <li>
                    <h5>Financier Name</h5>
                    <p>{props.location.state.invoice.financier_name__c}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Other Financier Name</h5>
                    <p>{props.location.state.invoice.other_financier_name__c}</p>
                  </li>
                </ul>
              </div>
}
            </Tab>

            <Tab eventKey="scheme" title="Scheme">
              <div
                className="invoice-dtl"
                style={{ minHeight: "500px", padding: "40px 0 0 20px" }}
              >
                {props.location.state.invoice && 
                <div className="scheme-box">
                  <ul>
                    <li>
                      <h5>Scheme Applied</h5>
                    </li>
                    <li>
                <p>{props.location.state.invoice.scheme_applied__c}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h5>Total Discount</h5>
                    </li>
                    <li>
                      <p>₹ {props.location.state.invoice.total_discount__c}</p>
                    </li>
                  </ul>
                </div>
}
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceInfo;
