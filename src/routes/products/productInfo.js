import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link, useHistory } from "react-router-dom";
import "../schemeclaims/scheme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { StepperNav } from "vertical-stepper-nav";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Form, InputGroup, Table, Tabs, Tab } from "react-bootstrap";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  GetDealerProductsActionFn,
  GetProductsActionFn,
} from "redux/actions/productAction";

function ProductInfo(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.productsData.allProducts);
  const DealerProd = useSelector((state) => state.productsData.dealerProducts);

  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);

  const [prod, setProd] = useState([]);
  const [dealerprod,setdealerProd] = useState([]);
  const [id, setId] = useState(null);
  const getProducts = () => {
    let body = {
      state_id: LoginData.state__c,
      offset: 0,
      limit: 10,
    };

    dispatch(GetProductsActionFn(body));

    let data = {
      state_id: LoginData.state__c,
      price_id: "a089D000002nbZtQAI",
    };

    dispatch(GetDealerProductsActionFn(data));
  };

  useEffect(() => {
    let Idd = Number(props.match.params.productId);

    setId(Idd);
    getProducts();
  }, []);

  useEffect(() => {
    if (Products?.data && Products?.data?.length > 0 ) {
      setProd(Products.data);
    }
     if (DealerProd?.data && DealerProd?.data?.length > 0) {
      setdealerProd(DealerProd.data);
    }
  }, [Products]);

  function getUnique(prod, comp) {
    // store the comparison  values in array
    const unique = prod
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => prod[e])
      .map((e) => prod[e]);

    return unique;
  }

  return (
    <Container>
      {/* <Row>
        <Col xl="5"></Col>
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
      </Row> */}

      <Row>
        <Col xl="12">
          <Tabs
            defaultActiveKey="info"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="info" title="Info">
              <Container className="invoice-dtl">
                <br />
                <Row>
                {getUnique(prod, "id")
                    .filter((pro) => pro.id === id)
                    .map((product) => {
                      return (
                        <>
                          <Col md={3}>
                            <p className="heading">Model</p>
                            <p className="subline">{product.name}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Product Category</p>
                            <p className="subline">
                              {product.product_category__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Battery</p>
                            <p className="subline">{product.battery__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Battery Type</p>
                            <p className="subline">{product.battery__c}</p>
                          </Col>

                          <Col md={3}>
                            <p className="heading">BLDC Hub Motor(in watt)</p>
                            <p className="subline">
                              {product.bldc_hub_motor_watt__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Kerb Weight (in kg)</p>
                            <p className="subline">{product.kerb_weight__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Range (in kmph)</p>
                            <p className="subline">
                              {product.range_in_kmph__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Ground Clearance (in mm)</p>
                            <p className="subline">
                              {product.ground_clearance_in_mm__c}
                            </p>
                          </Col>

                          <Col md={3}>
                            <p className="heading">Top Speed (in kmph)</p>
                            <p className="subline">{product.top_speed__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Charging Time (in hrs)</p>
                            <p className="subline">
                              {product.charging_time__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">
                              Battery Capacity (in V|AH)
                            </p>
                            <p className="subline">
                              {product.battery_capacity_in_v_ah__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Wheel Size(in inch)</p>
                            <p className="subline">
                              {product.wheel_size_in_inch__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Subsidy</p>
                            <p className="subline">
                              {product.subsidy_amount__c}
                            </p>
                          </Col>
                        </>
                      );
                    })}

                    {/*  */}

                    {getUnique(dealerprod, "id")
                    .filter((pro) => pro.id === id)
                    .map((product) => {
                      return (
                        <>
                          <Col md={3}>
                            <p className="heading">Model</p>
                            <p className="subline">{product.name}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Product Category</p>
                            <p className="subline">
                              {product.product_category__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Battery</p>
                            <p className="subline">{product.battery__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Battery Type</p>
                            <p className="subline">{product.battery__c}</p>
                          </Col>

                          <Col md={3}>
                            <p className="heading">BLDC Hub Motor(in watt)</p>
                            <p className="subline">
                              {product.bldc_hub_motor_watt__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Kerb Weight (in kg)</p>
                            <p className="subline">{product.kerb_weight__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Range (in kmph)</p>
                            <p className="subline">
                              {product.range_in_kmph__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Ground Clearance (in mm)</p>
                            <p className="subline">
                              {product.ground_clearance_in_mm__c}
                            </p>
                          </Col>

                          <Col md={3}>
                            <p className="heading">Top Speed (in kmph)</p>
                            <p className="subline">{product.top_speed__c}</p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Charging Time (in hrs)</p>
                            <p className="subline">
                              {product.charging_time__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">
                              Battery Capacity (in V|AH)
                            </p>
                            <p className="subline">
                              {product.battery_capacity_in_v_ah__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Wheel Size(in inch)</p>
                            <p className="subline">
                              {product.wheel_size_in_inch__c}
                            </p>
                          </Col>
                          <Col md={3}>
                            <p className="heading">Subsidy</p>
                            <p className="subline">
                              {product.subsidy_amount__c}
                            </p>
                          </Col>
                        </>
                      );
                    })}
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductInfo;
