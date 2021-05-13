import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Table,
  Tabs,
  Tab,
} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import "./customer.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomersActionFn } from "redux/actions/customerAction";

function CustomerDetails(props) {
  const dispatch = useDispatch();
  const CustomersData = useSelector(
    (state) => state.Customers.allcustomers.data
  );
  const [customerInfo, setCustomerInfo] = useState(null);

  const getCustomers = () => {
    dispatch(GetCustomersActionFn());
  };
  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    let CustomerInfo =
      CustomersData?.result?.length > 0 &&
      CustomersData?.result.filter(
        (customer) => customer.id === Number(props.match.params.customerId)
      );

    setCustomerInfo(CustomerInfo);
    console.log(CustomerInfo);
  }, [CustomersData]);

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
                {CustomersData?.result?.length > 0 &&
                  CustomersData?.result
                    .filter(
                      (customer) =>
                        customer.id === Number(props.match.params.customerId)
                    )
                    .map((cust) => {
                      let todate = new Date(cust.enquiry[0].delivery_date__c);
                      return (
                        <>
                          <Row>
                            <Col md={2}>
                              <p className="heading">First Name</p>
                              <p className="subline">
                                {cust.firstname} {cust.middlename}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Last Name</p>
                              <p className="subline">{cust.lastname}</p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Contact No.</p>
                              <p className="subline">{cust.mobilephone}</p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Customer Email</p>
                              <p className="subline">{cust.email}</p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Address</p>
                              <p className="subline">
                                {cust.address_line_1__c}
                              </p>
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
                              <p className="subline">
                                {cust.enquiry[0].online_order_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Reference No.</p>
                              <p className="subline">
                                {cust.enquiry[0].reference_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Tally No.</p>
                              <p className="subline">
                                {cust.enquiry[0].tally_invoice_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Delivery Date</p>
                              <p className="subline">
                                {" "}
                                {todate.getFullYear() +
                                  "-" +
                                  (todate.getMonth() + 1) +
                                  "-" +
                                  todate.getDate()}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Remarks</p>
                              <p className="subline">
                                {cust.enquiry[0].remark__c}
                              </p>
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col md={2}>
                              <p className="heading">Product Purchased</p>
                              <p className="subline">{cust.enquiry[0].name}</p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Total Amount Payable</p>
                              <p className="subline">
                                {cust.enquiry[0].total_amount_payable__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Model Color</p>
                              <p className="subline">
                                {cust.enquiry[0].model_color__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Chassis No.</p>
                              <p className="subline">
                                {cust.enquiry[0].chassis_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Motor No.</p>
                              <p className="subline">
                                {cust.enquiry[0].motor_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Battery No.</p>
                              <p className="subline">
                                {cust.enquiry[0].battery_no__c}
                              </p>
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col md={2}>
                              <p className="heading">Charger No.</p>
                              <p className="subline">
                                {cust.enquiry[0].charger_no__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Make of Battery</p>
                              <p className="subline">
                                {cust.enquiry[0].make_of_battery__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Type of Battery</p>
                              <p className="subline">
                                {cust.enquiry[0].type_of_battery__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">
                                Capacity of each Battery
                              </p>
                              <p className="subline">
                                {cust.enquiry[0].capacity_of_each_battery__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Financier Name</p>
                              <p className="subline">
                                {cust.enquiry[0].financier_name__c}
                              </p>
                            </Col>
                            <Col md={2}>
                              <p className="heading">Other Financier Name</p>
                              <p className="subline">
                                {cust.enquiry[0].other_financier_name__c}
                              </p>
                            </Col>
                          </Row>
                          <br />

                          <Row>
                            <Col md={8}>
                              <p className="heading">
                                Aadhar Card(Front & Back)/Voter ID/PAN
                                Card/Driving Licence/GST Registration
                                Certificate(for B2B)
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
                        </>
                      );
                    })}
                <br />
              </Container>
            </Tab>

            <Tab eventKey="offer" title="Offer Applied">
              <Container className="invoice-dtl">
                <Row>
                  {CustomersData?.result?.length > 0 &&
                    CustomersData?.result
                      .filter(
                        (customer) =>
                          customer.id === Number(props.match.params.customerId)
                      )
                      .map((cust) => {
                        return (
                          cust.enquiry[0].schemes &&
                          cust.enquiry[0].schemes.length > 0 &&
                          cust.enquiry[0].schemes.map((scheme) => {
                            return (
                              <>
                                <Col md="6">
                                  <div className="customer-info-box">
                                    <Row>
                                      <Col
                                        md="5"
                                        className="customer-info-box-left"
                                      >
                                        <p>Scheme Name</p>
                                        <p>Scheme Amount</p>
                                      </Col>
                                      <Col
                                        md="7"
                                        className="customer-info-box-right"
                                      >
                                        <p>{scheme.scheme_name}</p>
                                        <p>{scheme.scheme_amount__c}</p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              </>
                            );
                          })
                        );
                      })}
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
