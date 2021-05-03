import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import { Link } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab, Container, Row, Col } from 'react-bootstrap';


function createData(cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount) {
    return { cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount };
}
const rows = [createData("White", "Pan India", "24/04/2021", "24/04/2021")];
function Rows(props) {

    const { row } = props;

    return (
        <React.Fragment>

            <TableRow>

                <TableCell className="equalcolumn">
                    <Link to={{ pathname: "/scheme-info" }}><p><b>Optima</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row" className="equalcolumn">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                        </InputGroup>
                    </Form.Group>
                </TableCell>
            </TableRow>
            <TableRow>

                <TableCell className="equalcolumn">
                    <Link to={{ pathname: "/scheme-info" }}><p><b>Optima</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row" className="equalcolumn">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                        </InputGroup>
                    </Form.Group>
                </TableCell>
            </TableRow>
            <TableRow>

                <TableCell className="equalcolumn">
                    <Link to={{ pathname: "/scheme-info" }}><p><b>Optima</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row" className="equalcolumn">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                        </InputGroup>
                    </Form.Group>
                </TableCell>
            </TableRow>
            <TableRow>

                <TableCell className="equalcolumn">
                    <Link to={{ pathname: "/scheme-info" }}><p><b>Optima</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row" className="equalcolumn">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="10" className="inputtext" />
                    </Form.Group>
                </TableCell>
                <TableCell>
                    <Form.Group as={Col} className="editcolumn">
                        <InputGroup className="inputclass">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <i class="fa fa-pencil icon rededit"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                        </InputGroup>
                    </Form.Group>
                </TableCell>
            </TableRow>


        </React.Fragment>
    );
}
export default function StockStatus() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Stock Update</h4>
                    </Grid>
                    <Grid item xs={2}>
                        <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
                    </Grid>
                    <Grid item xs={4}>
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
                    </Grid>
                </Grid>
            </div>
            <Container fluid className="homecardcontainer">
                <Row>
                    <Col md={3}>
                        <div className="card homecard homecardpadding">
                            <Row>
                                <Col md={12}>
                                    <h3 className="whiteheading1"><b>Total Current Stock</b></h3>
                                    <p className="paragraph2"><b>50</b></p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="card homecard homecardpadding">
                            <Row>
                                <Col md={12}>
                                    <h3 className="whiteheading1"><b>Totalo Min. Stock Maintained</b></h3>
                                    <p className="paragraph2"><b>60</b></p>
                                </Col>
                            </Row>
                        </div>
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
                                <TableCell>Current Stock</TableCell>
                                <TableCell>Min. Stock Maintained</TableCell>
                                <TableCell>Edit</TableCell>

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
            <div>
                <Pagination count={10} shape="rounded" />
            </div>
        </React.Fragment>
    );
}