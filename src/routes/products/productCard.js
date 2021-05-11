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

const ProductCard = (props) =>{
return(
        <div className="col-md-6" key={props.id}>
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-col-left">
          <h2>{props.productname}</h2>
          <h3>{props.price}</h3>
          <ul>
            <li>RANGE</li>
            <li>{props.battery_capacity}</li>
          </ul>
          <ul>
            <li>BATTERY</li>
            <li>{props.battery}</li>
          </ul>
        </div>
        <div className="product-col-center">
          <img src={scooty} />
        </div>
        <div className="product-col-right">
          <h2>
            {props.charging_time} <span>Hours</span>
          </h2>
          <p>CHARGING TIME</p>
        </div>
      </div>
      <div className="product-bottom">
        <div className="product-btm-left">
          <h2>Lithium Ion</h2>
          <p>Battery Type</p>
        </div>
        <div className="product-btm-right">
          <Link to={`/product-info/${props.id}`} >More Details</Link>
        </div>
      </div>
    </div>
  </div>
)

}
export default ProductCard