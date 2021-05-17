import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

import "./customer.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomersActionFn } from "redux/actions/customerAction";

function CustomerComponent() {
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);
  const CustomersData = useSelector(
    (state) => state.Customers.allcustomers.data
  );
  const [customerList, setCustomerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCustomers = () => {
    dispatch(GetCustomersActionFn());
  };
  useEffect(() => {
    getCustomers();
  }, []);
  useEffect(() => {
    if (CustomersData && CustomersData.result)
      setCustomerList(CustomersData.result);
  }, CustomersData);

  console.log(CustomersData);
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <h4>Customers</h4>
        </Col>
        <Col xl="2">
          <button className="refresh-btn" onClick={()=>window.location.reload(true)}>
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
              <Form.Control
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <div
          className="tabspadding"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TableContainer component={Paper}>
            <Table className="customer-table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Contact No.</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell style={{ width: "400px" }}>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerList.length > 0 &&
                  customerList
                    .filter(
                      (cus) =>
                        cus.firstname
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        cus.mobilephone.includes(searchTerm)
                    )

                    .map((customer, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell>
                            <Link to={`/customer-info/${customer.id}`}>
                              {customer.firstname} {customer.middlename}{" "}
                              {customer.lastname}
                            </Link>
                          </TableCell>
                          <TableCell>{customer.mobilephone}</TableCell>
                          <TableCell>{customer.gender__c}</TableCell>
                          <TableCell>{customer.age__c}</TableCell>
                          <TableCell>{customer.address_line_1__c}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Row>
      {/* <div>
      <Pagination count={10} shape="rounded" />
      </div> */}
    </Container>
  );
}

export default CustomerComponent;
