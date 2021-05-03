import React from "react";
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col, Image, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../orders/orders.css'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IsoIcons } from "react-icons/io";


function createData(colour, cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount) {
    return { colour, cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount };
}
const rows = [createData("Optima", "Black", "Pan India", "₹ 41,770", "₹ 41,77,700")];
function Rows(props) {

    const { row } = props;

    return (
        <React.Fragment>

            <TableRow>

                <TableCell>
                    {row.colour}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.cusrtomername}
                </TableCell>
                <TableCell className="editwidth">
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="40"
                            />
                        </InputGroup>
                    </Form.Group>
                </TableCell>
                <TableCell>{row.claimsubmissiondate}</TableCell>
                <TableCell>{row.schemeamount}</TableCell>
            </TableRow>
            <TableRow>

                <TableCell>
                    {row.colour}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="40"
                            />
                        </InputGroup>
                    </Form.Group>
                </TableCell>
                <TableCell>{row.claimsubmissiondate}</TableCell>
                <TableCell>{row.schemeamount}</TableCell>
            </TableRow>
           

        </React.Fragment>
    );
}

export default function ViewCart() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Cart</h4>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
                    </Grid>
                </Grid>
            </div><br />
            <Container fluid className="redbgviewcart">
                <Row className="productrow">
                    <Col md={4}>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control type="quantity" placeholder="27/04/2021" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Total Quantity</Form.Label>
                            <Form.Control type="quantity" placeholder="20" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Gross Amount</Form.Label>
                            <Form.Control type="quantity" placeholder="₹ 12,00,000" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="productrow">
                    <Col md={4}>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Total Tax</Form.Label>
                            <Form.Control type="quantity" placeholder="₹ 1,00,000" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Total Amount Payable (Inl. Taxes) </Form.Label>
                            <Form.Control type="quantity" placeholder="₹ 13,00,000" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <div className="tabspadding">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Colour</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell>Total Value</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <Rows key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Container>
                <Row>
                    <Col md={12} className="textcenter">
                        <button type="button" className="btn btn-default addtocardbtnnew">Place Order</button>
                        {/* <button type="button" className="btn btn-default addtocardbtnnewgreen">Order Placed Successfully</button> */}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}