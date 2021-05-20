import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import "./invoices.css";
import { useDispatch, useSelector } from "react-redux";
import { GetInvoicesActionFn } from "redux/actions/invoiceAction";

function InvoicesComponent() {
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);
  const Invoicedata = useSelector((state) => state.Invoices.allinvoice);
  const [invoiceList, setInvoiceList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getInvoices = () => {
    dispatch(GetInvoicesActionFn(LoginData.dealer__c));
  };
  useEffect(() => {
    getInvoices();
  }, []);
  useEffect(() => {
    if (Invoicedata && Invoicedata.Invoice_lines)
      setInvoiceList(Invoicedata.Invoice_lines);
  }, [Invoicedata]);

  console.log(invoiceList);
  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <h4>Invoices</h4>
        </Col>
        <Col xl="2">
          <button
            className="refresh-btn"
            onClick={() => window.location.reload(true)}
          >
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
        <div className="tabspadding" style={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table className="inv-table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ maxWidth: "40px" }}></TableCell>
                  <TableCell style={{ minWidth: "120px" }}>
                    Customer Id
                  </TableCell>
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
                {invoiceList?.length > 0 &&
                  invoiceList
                    .filter(
                      (inv) =>
                        inv.first_name__c
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        inv.name.includes(searchTerm)
                    )
                    .map((invoice) => {
                      return (
                        <TableRow>
                          <TableCell style={{ maxWidth: "40px" }}>
                            <Checkbox
                              value={invoice.id}
                              inputProps={{ "aria-label": invoice.id }}
                              color="secondary"
                            />
                          </TableCell>
                          <TableCell>
                            <Link
                              to={{
                                pathname: `/invoice-info`,
                                state: { invoice },
                              }}
                            >
                              {invoice.name}
                            </Link>
                          </TableCell>
                          <TableCell>{invoice.first_name__c}</TableCell>
                          <TableCell>{invoice.last_name__c}</TableCell>
                          <TableCell>{invoice.contact_number__c}</TableCell>
                          <TableCell>{invoice.product__c}</TableCell>
                          <TableCell>
                            {invoice.amount_paid_at_booking__c}
                          </TableCell>
                          <TableCell>{invoice.purchased_date__c}</TableCell>
                          <TableCell>{invoice.chassis_no__c}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Row>
      <div>{/* <Pagination count={10} shape="rounded" /> */}</div>
    </Container>
  );
}

export default InvoicesComponent;
