import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab, Container, Row, Col, Image } from 'react-bootstrap';
import outstanding from '../../assets/images/outstanding.svg'

export default function Outstanding() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <React.Fragment>
            <div className="profilecontainer">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Outstanding</h4>
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
                    <Col md={4}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Month</Form.Label>
                            <Form.Control as="select">
                                <option value="" disabled selected hidden>Select Month</option>
                                <option>All</option>
                                <option>January </option>
                                <option>February </option>
                                <option>March </option>
                                <option>April </option>
                                <option>May </option>
                                <option>June</option>
                                <option>July</option>
                                <option>August </option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Year</Form.Label>
                            <Form.Control as="select">
                                <option value="" disabled selected hidden>Select Year</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                                <option>2032</option>
                                <option>2033</option>
                                <option>2034</option>
                                <option>2035</option>
                                <option>2036</option>
                                <option>2037</option>
                                <option>2038</option>
                                <option>2039</option>
                                <option>2040</option>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="rowpadding">
                    <Col md={3}>
                        <a href="/schemes" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading3"><b>Outstanding on dealer</b></h3>
                                        <p className="paragraph3"><b>₹ 40,000</b></p>
                                    </Col>
                                    <Col md={4}>
                                        <div className="yellowbox">
                                            <Image src={outstanding} className="homesvgimg" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="/schemes" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading3"><b>Outstanding on Hero Electric</b></h3>
                                        <p className="paragraph3"><b>₹ 40,000</b></p>
                                    </Col>
                                    <Col md={4}>
                                        <div className="yellowbox">
                                            <Image src={outstanding} className="homesvgimg" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}