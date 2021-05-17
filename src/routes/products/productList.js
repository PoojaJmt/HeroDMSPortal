import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Table,
  Tabs,
  Tab,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import scooty from "../../assets/images/scooty.png";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetDealerProductsActionFn,
  GetProductsActionFn,
} from "redux/actions/productAction";
import AllProducts from "./allproducts";
import DealerProducts from "./dealerproducts";

function ProductList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);

  const [allpro, getallpro] = useState(true);
  const [dealerpro, getdealerpro] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <Container fluid>
      <Row>
        <Col xl="5">
          <div className="switches">
            <button
              className={allpro === true ? "active" : ""}
              onClick={()=>getallpro(true)}
            >
              Customer Price List
            </button>
            <button
              onClick={()=>getallpro(false)}
              className={allpro === false ? "active" : ""}
            >
              Dealer Price List
            </button>
          </div>
        </Col>
        <Col xl="2">
          {/* <button className="refresh-btn">
            <i className="fa fa-refresh"></i> Reload
          </button> */}
        </Col>
        <Col xl="5">
          <Form.Group className="search-customer">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fa fa-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Search product here.." 
              value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xl="12">
          {allpro === true ? <AllProducts search={searchTerm} /> : <DealerProducts search={searchTerm}/>}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
