import React from "react";
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col, Image, Form, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../orders/orders.css'
import scooty from '../../assets/images/scooty.png'
export default function NewOrders() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>New Order</h4>
                    </Grid>
                    <Grid item xs={4}>
                        <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
                    </Grid>
                    <Grid item xs={2}>
                      <a href="/view-cart"><button className="resubmit-btn"> <i className="fa fa-shopping-cart cartbtn"></i> View Cart</button></a>
                    </Grid>
                </Grid>
            </div><br />
            <Container fluid className="redbg">
                <Row className="productrow">
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control as="select">
                                <option value="" disabled selected hidden>Select Product Category</option>
                                <option>High Speed</option>
                                <option>Low Speed</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <p>Product</p>
                        <Form.Group className="search-customer" style={{ marginTop: '-7px' }}>
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
            </Container>
            <Container fluid className="containerpadding">
                <Row>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </Row><br />
                <Row>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card">
                            <div className="product-card-top">
                                <div className="product-col-left">
                                    <Image src={scooty} className="scootyimg" />
                                </div>
                                <div className="product-col-right">
                                    <h2>
                                        <b>Optima</b>
                                    </h2>
                                    <p className="optimap">NDP : ₹ 41,770</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Colour</Form.Label>
                                        <Form.Control as="select">
                                            <option value="" disabled selected hidden>Select Colour</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type="quantity" placeholder="Enter Quantity" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <div className="product-btm-right">
                                    <button type="button" className="btn btn-default addtocardbtn">Add to cart</button>
                                    {/* <button type="button" className="btn btn-default addtocardbtngreen">Added to Cart</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>
        </React.Fragment>
    );
}