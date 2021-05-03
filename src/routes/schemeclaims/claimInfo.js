import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import '../schemeclaims/scheme.css'
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { StepperNav } from "vertical-stepper-nav";
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function ClaimInfo() {
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">CLAIM RESUBMISSION FORM</h2>
            <Container>
                <Row>
                    <Col md={6} style={{ marginLeft: '0px' }}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Chassis No.</Form.Label>
                            <Form.Control type="text" placeholder="NYX57854667" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Delivery Date</Form.Label><br/>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Aadhar card(front & back)/ Voter ID/ PAN card/ Driving License*</Form.Label>
                            <div className="image-holder">
                                <input type="file" className="upload-btn-input"></input>
                                <button className="upload-btn">
                                    <i className="fa fa-upload"></i> Upload Image
              </button>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Invoice*</Form.Label>
                            <div className="image-holder">
                                <input type="file" className="upload-btn-input"></input>
                                <button className="upload-btn">
                                    <i className="fa fa-upload"></i> Upload Image
              </button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Insurance/RC/Tax Token</Form.Label>
                            <div className="image-holder">
                                <input type="file" className="upload-btn-input"></input>
                                <button className="upload-btn">
                                    <i className="fa fa-upload"></i> Upload Image
              </button>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail" className="mt-5">
                            <Form.Label>Customer acknowledgement(in case of subsidy)</Form.Label>
                            <div className="image-holder">
                                <input type="file" className="upload-btn-input"></input>
                                <button className="upload-btn">
                                    <i className="fa fa-upload"></i> Upload Image
              </button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

            </Container>
            <Container className="btncontainer">
                <Row>
                    <Col md={6}>
                        <button type="button" className="cancelbtn" onClick={handleClose} >CANCEL</button>
                    </Col>
                    <Col md={6}>
                        <button type="button" className="resubmit-btn" >RESUBMIT</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );

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
                        <button className="resubmit-btn" onClick={handleOpen}>RESUBMIT</button>


                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>

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
                                        </Row><br />
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
                                        </Row><br />
                                        <Row>
                                            <Col md={3}>
                                                <p className="heading">Claimj Submission Date</p>
                                                <p className="subline">10/18/2020</p>
                                            </Col>
                                            <Col md={3}>
                                                <p className="heading">Chassis No.</p>
                                                <p className="subline">NYX987650</p>
                                            </Col>
                                        </Row><br />
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