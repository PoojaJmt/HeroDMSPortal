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
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import "./customer.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomersActionFn } from "redux/actions/customerAction";

function CustomerInfo(props) {
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
      <Row className="mb-4">
        <Col xl="9" >
          <h4>Customers </h4>
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
              <Container className="mt-4">
                <Row>
                  {CustomersData?.result?.length > 0 &&
                    CustomersData?.result
                      .filter(
                        (customer) =>
                          customer.id === Number(props.match.params.customerId)
                      )
                      .map((cust) => {
                        return cust.enquiry.map((custEnq) => {
                          let todate = new Date(custEnq.createddate);
                          return (
                            <Col md="6">
                              <Link
                                to={`/customer-details/${props.match.params.customerId}`}
                              >
                                <div className="customer-info-box">
                                  <Row>
                                    <Col
                                      md="6"
                                      className="customer-info-box-left"
                                    >
                                      <p>Product Name</p>
                                      <p>Product Price</p>
                                      <p>Product Date</p>
                                      <p>Model Color</p>
                                    </Col>

                                    <Col
                                      md="6"
                                      className="customer-info-box-right"
                                    >
                                      <p>{custEnq.name}</p>

                                      <p>₹ {custEnq.basic_amount__c}</p>
                                      <p>
                                        {" "}
                                        {todate.getFullYear() +
                                          "-" +
                                          (todate.getMonth() + 1) +
                                          "-" +
                                          todate.getDate()}
                                      </p>
                                      <p>{custEnq.model_color__c}</p>
                                    </Col>
                                  </Row>
                                </div>
                              </Link>
                            </Col>
                          );
                        });
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

export default CustomerInfo;
