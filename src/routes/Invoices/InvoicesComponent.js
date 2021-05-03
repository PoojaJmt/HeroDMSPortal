import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import "./invoices.css";

function InvoicesComponent() {
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <h4>Invoices</h4>
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
        <div className="tabspadding" style={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table className="inv-table">
              <TableHead>
                <TableRow>
                  <TableCell style={{maxWidth:"40px"}}></TableCell>
                  <TableCell>Customer Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Product Sold</TableCell>
                  <TableCell>Total Amt. Payable</TableCell>
                  <TableCell>Purchased Date</TableCell>
                  <TableCell>Chassis No.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{maxWidth:"40px"}}>
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                      color="secondary"
                    />
                  </TableCell>
                  <TableCell>
                    <Link to="/invoice-info">Enq-112</Link>
                  </TableCell>
                  <TableCell>Sukhbir</TableCell>
                  <TableCell>Kaur</TableCell>
                  <TableCell>1234567890</TableCell>
                  <TableCell>Zion</TableCell>
                  <TableCell>$50,000</TableCell>
                  <TableCell>12/04/2021</TableCell>
                  <TableCell>NYZ12345</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{maxWidth:"40px"}}>
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                      color="secondary"
                    />
                  </TableCell>
                  <TableCell>
                    <Link to="/invoice-info">Enq-112</Link>
                  </TableCell>
                  <TableCell>Sukhbir</TableCell>
                  <TableCell>Kaur</TableCell>
                  <TableCell>1234567890</TableCell>
                  <TableCell>Zion</TableCell>
                  <TableCell>$50,000</TableCell>
                  <TableCell>12/04/2021</TableCell>
                  <TableCell>NYZ12345</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{maxWidth:"40px"}}>
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                      color="secondary"
                    />
                  </TableCell>
                  <TableCell>
                    <Link to="/invoice-info">Enq-112</Link>
                  </TableCell>
                  <TableCell>Sukhbir</TableCell>
                  <TableCell>Kaur</TableCell>
                  <TableCell>1234567890</TableCell>
                  <TableCell>Zion</TableCell>
                  <TableCell>$50,000</TableCell>
                  <TableCell>12/04/2021</TableCell>
                  <TableCell>NYZ12345</TableCell>
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

export default InvoicesComponent;
