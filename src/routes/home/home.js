import React from "react";
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import carouselimg1 from '../../assets/images/carousel1.png'
import carouselimg2 from '../../assets/images/carousel2.png'
import carouselimg3 from '../../assets/images/carousel3.png'
import percentage from '../../assets/images/percentage.svg'
import delivery from '../../assets/images/delivery.svg'
import stock from '../../assets/images/stock.svg'
import outstanding from '../../assets/images/outstanding.svg'



import '../home/home.css'
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={12}>
                    <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
                    </Col>
                </Row>
            </Container><br/>
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselimg3}
                            className="carouselimg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselimg2}
                            className="carouselimg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselimg1}
                            className="carouselimg"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container fluid className="homecardcontainer">
                <Row>
                    <Col md={3}>
                        <Link to="/schemes" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading"><b>SCHEMES</b></h3>
                                        <p className="paragraph1">Click here to know more</p>
                                    </Col>
                                    <Col md={4}>
                                        <div className="yellowbox">
                                            <Image src={percentage} className="homesvgimg" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <a href="" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading"><b>DELIVERY TRACKING</b></h3>
                                        <p className="paragraph1">Click here to know more</p>
                                    </Col>
                                    <Col md={4}>
                                        <div className="yellowbox">
                                            <Image src={delivery} className="homesvgimg" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="/stock-status" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading"><b>STOCK STATUS</b></h3>
                                        <p className="paragraph1">Click here to know more</p>
                                    </Col>
                                    <Col md={4}>
                                        <div className="yellowbox">
                                            <Image src={stock} className="homesvgimg" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a href="/outstading" className="alink">
                            <div className="card homecard homecardpadding">
                                <Row>
                                    <Col md={8}>
                                        <h3 className="whiteheading"><b>OUTSTADING</b></h3>
                                        <p className="paragraph1">Click here to know more</p>
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