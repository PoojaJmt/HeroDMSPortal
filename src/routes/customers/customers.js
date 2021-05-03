import React from "react";
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

import './customer.css';

function CustomerComponent() {
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <h4>Customers</h4>
        </Col>
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
        <div className="tabspadding" style={{width:"100%",textAlign:"center"}}>
          <TableContainer component={Paper}>
            <Table className="customer-table">
              <TableHead >
                <TableRow >
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Contact No.</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Address</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link to="/customer-info">Sunil Sharma</Link>
                  </TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Rajouri garden, Delhi</TableCell>
                 
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Link to="/invoice-info">Sunil Sharma</Link>
                  </TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Rajouri garden, Delhi</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/invoice-info">Sunil Sharma</Link>
                  </TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Rajouri garden, Delhi</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/invoice-info">Sunil Sharma</Link>
                  </TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Rajouri garden, Delhi</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/invoice-info">Sunil Sharma</Link>
                  </TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Rajouri garden, Delhi</TableCell>
                 
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Row>
      <div>
      <Pagination count={10} shape="rounded" />
      </div>
    </Container>
  );
}

export default CustomerComponent;
