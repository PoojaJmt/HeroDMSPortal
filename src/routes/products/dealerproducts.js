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
import ProductCard from "./productCard";

function DealerProducts(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);

  const Products = useSelector((state) => state.productsData.dealerProducts);
  const [prod, setProd] = useState([]);

  const DealerProducts = () => {
    let data = {
      state_id: LoginData.state__c,
      price_id: "a089D000002nbZtQAI",
    };

    dispatch(GetDealerProductsActionFn(data));
  };

  console.log(LoginData);

  useEffect(() => {
    DealerProducts();
  }, []);
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

  useEffect(() => {
    if (Products?.data && Products?.data?.length > 0) {
      setProd(Products.data);
    }
  }, [Products]);

  console.log("pro", prod);

  return (
    <Tabs defaultActiveKey="all" transition={false} id="noanim-tab-example">
      <Tab eventKey="all" title="All">
        <Row className="mt-5">

          {
          getUnique(prod, "id").filter(pro=>pro.name.toLowerCase().includes(props.search.toLowerCase()))
          .map((product) => {
            return (
              <ProductCard
                productname={product.name}
                price={product.price__c}
                battery_capacity={product.battery_capacity_in_v_ah__c}
                battery={product.battery__c}
                charging_time={product.charging_time__c}
                id={product.id}
              />
            );
          })}
        </Row>
      </Tab>
      <Tab eventKey="cityspeed" title="Low Speed">
        <Row className="mt-5">
          {getUnique(prod, "id")
            .filter((pro) => pro.product_category__c.includes("Low Speed"))
            .map((product) => {
              return (
                <ProductCard
                  productname={product.name}
                  price={product.price__c}
                  battery_capacity={product.battery_capacity_in_v_ah__c}
                  battery={product.battery__c}
                  charging_time={product.charging_time__c}
                  id={product.id}
                />
              );
            })}
        </Row>
      </Tab>
      <Tab eventKey="comfortspeed" title="High Speed">
        <Row className="mt-5">
          {getUnique(prod, "id")
            .filter((pro) => pro.product_category__c.includes("High Speed"))
            .filter(pro=>pro.name.toLowerCase().includes(props.search.toLowerCase()))
            .map((product) => {
              return (
                <ProductCard
                  productname={product.name}
                  price={product.price__c}
                  battery_capacity={product.battery_capacity_in_v_ah__c}
                  battery={product.battery__c}
                  charging_time={product.charging_time__c}
                  id={product.id}
                />
              );
            })}
        </Row>
      </Tab>
    </Tabs>
  );
}

export default DealerProducts;
