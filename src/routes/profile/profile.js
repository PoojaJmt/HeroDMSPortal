import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import '../schemeclaims/scheme.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { StepperNav } from "vertical-stepper-nav";
import Grid from '@material-ui/core/Grid';
import * as FosIcons from 'react-icons/fa';


function ProfileData() {

    return (
        <div className="App">
            <div>
                <Grid container spacing={3} className="profilecontainer">
                    <Grid item xs={6}>
                        <h4>Profile</h4>
                    </Grid>
                </Grid>
            </div><br />
            <Container fluid className="schemecontainer">
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Body><br />
                                <Card.Text>
                                    <Container>
                                        <Row>
                                            <Col md={4}>
                                                <FosIcons.FaUserCircle className="profilearrow" />
                                            </Col>
                                            <Col md={8}>
                                                <p className="profileheading">Dealer Name</p>
                                                <p className="subline">SRI LALITHA ECO MOTORS</p><br />
                                                <p className="profileheading">Dealer Code</p>
                                                <p className="subline">1005786</p>
                                            </Col>
                                        </Row>
                                    </Container>

                                    <Container className="profilepadding">
                                        <Row>
                                            <Col md={3}>
                                                <p className="profileheading">Area Manager</p>
                                                <p className="subline">V Prasad</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Regional Manager</p>
                                                <p className="subline">S Suresh</p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="profileheading">GSTIN No.</p>
                                                <p className="subline">68969236522</p>
                                            </Col>
                                        </Row><br />
                                        <Row>
                                            <Col md={3}>
                                                <p className="profileheading">Owner 1</p>
                                                <p className="subline">1005786</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Owner 2</p>
                                                <p className="subline">MR. ALISETTY HARISH</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Owner 3</p>
                                                <p className="subline">MR. DEV HARISH</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Owner 4</p>
                                                <p className="subline">----</p>
                                            </Col>
                                        </Row><br />
                                        <Row>
                                            <Col md={3}>
                                                <p className="profileheading">Phone No. 1</p>
                                                <p className="subline">9505310296</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Phone No. 2</p>
                                                <p className="subline">7989946063</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Phone No. 3</p>
                                                <p className="subline">----</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="profileheading">Email Id</p>
                                                <p className="subline">505327.sri.lal@gmail.com</p>
                                            </Col>
                                        </Row><br />
                                        <Row>
                                            <Col md={12}>
                                            <p className="profileheading">Showroom Address</p>
                                                <p className="subline">H NO-4-16/C1, OPP. DISTRICT COLLECTORATE, KARIMNAGAR ROAD, JAGITIAL, TELANGANA</p>
                                            </Col>
                                        </Row>

                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ProfileData;