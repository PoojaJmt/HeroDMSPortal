import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import '../schemeclaims/scheme.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { StepperNav } from "vertical-stepper-nav";

function ClaimInfo() {
    const [data, setData] = useState();
    const columns = [
        { title: "Claim Id", field: "id" },
        { title: "Customer Name", field: "userId" },
        { title: "Scheme Applied", field: "title" },
        { title: "Claim Submission Date", field: "title" },
        { title: "Expected Claim Amount", field: "title" },
        { title: "Status", field: "title" },
        { title: "Chassis No.", field: "title" },
    ]
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
    }, [])

    return (
        <div className="App">
            <Container fluid className="schemecontainer">
                <Row>
                    <Col md={8}>
                        {/* <h4>Scheme Claims</h4> */}
                    </Col>
                    <Col md={2}>
                        <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
                    </Col>
                    <Col md={2}>
                        <button className="resubmit-btn">RESUBMIT</button>

                    </Col>
                </Row>
            </Container>
            <Container fluid className="schemecontainer">
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Claim Info</Card.Title><hr id="hrline" />
                                <h4><b>CL11022</b></h4><br />
                                <Card.Text>
                                    <Container>
                                        <Row>
                                            <Col md={3}>
                                                <p className="heading">Customer</p>
                                                <p className="subline">Sukhbir Kaur</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Customer Mobile</p>
                                                <p className="subline">8956471200</p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="heading">Scheme Applied</p>
                                                <p className="subline">Khushiyo Ka Tyohar Offer(Cash Discount)</p>
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col md={3}>
                                                <p className="heading">Scheme Discount Offer</p>
                                                <p className="subline">₹ 3,000</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Expected Claim Amount</p>
                                                <p className="subline">₹ 1500</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Online Order No.</p>
                                                <p className="subline">xxxxxx</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Reference No.</p>
                                                <p className="subline">xxxxxx</p>
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col md={3}>
                                                <p className="heading">Claimj Submission Date</p>
                                                <p className="subline">10/18/2020</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Chassis No.</p>
                                                <p className="subline">NYX987650</p>
                                            </Col>
                                        </Row><br/>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <div class="step">
                            <div>
                                <div class="circle"></div>
                                <div class="line"></div>
                            </div>
                            <div>
                                <div class="title">Credit Note Status</div>
                                <div class="body">
                                    <Card className="creditcardpadding">
                                        <Card.Body className="creditcardbody">
                                            <Card.Text>
                                                <p><b>-</b></p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div>
                                <div class="circle"></div>
                                <div class="line"></div>
                            </div>
                            <div>
                                <div class="title">Account Verification Status</div>
                                <Card className="creditcardpadding">
                                    <Card.Body className="creditcardbody">
                                        <Card.Text>
                                            <p><b>-</b></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div class="step">
                            <div>
                                <div class="circle"></div>
                                <div class="line"></div>
                            </div>
                            <div>
                                <div class="title">Bank Office Status</div>
                                <Card className="creditcardpadding">
                                    <Card.Body className="creditcardbody">
                                        <Card.Text>
                                            <p><b>-</b></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div class="step">
                            <div>
                                <div class="circlegreen"></div>
                                <div class="line"></div>
                            </div>
                            <div>
                                <div class="title">Field Team Status</div>
                                <Card className="teamcardbody">
                                    <Card.Body className="teamcardbody">
                                        <Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col md={12}>
                                                        <p><b>Rejection</b></p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <p>Rejection reason</p>
                                                    </Col>
                                                    <Col md={6}>
                                                        <p><b>Aadhar cardis not clear</b></p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </Col>



                </Row>
            </Container>
        </div>
    );
}
export default ClaimInfo;