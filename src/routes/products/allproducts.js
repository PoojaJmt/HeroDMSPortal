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

import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetDealerProductsActionFn,
  GetProductsActionFn,
  GetTaxActionFn,
} from "redux/actions/productAction";
import ProductCard from "./productCard";

function AllProducts(props) {
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);

  const Products = useSelector((state) => state.productsData.allProducts);
  const TaxDetails = useSelector((state) => state.productsData.taxDetails);
  const DealerProducts = useSelector(
    (state) => state.productsData.dealerProducts
  );
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState([]);

  const [cityspeed, setcityspeed] = useState([]);
  const [Nodata, setNodata] = useState(false);
  const [sgst, setsgst] = useState(null);
  const [cgst, setcgst] = useState(null);

  const getProducts = () => {
    let body = {
      state_id: LoginData.state__c,
      offset: 0,
      limit: 10,
    };

    dispatch(GetProductsActionFn(body));
    dispatch(GetTaxActionFn());
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (Products?.data && Products?.data?.length > 0) {
      setProd(Products.data);
      setLoading(false);
    }
  }, [Products]);

  console.log("tax", TaxDetails.tax);
  console.log(Products)

  return (
    <Tabs defaultActiveKey="all" transition={false} id="noanim-tab-example">
      <Tab eventKey="all" title="All">
        <Row className="mt-5">
          {loading ? (
            <div className="loader">
              <i class="fa fa-spinner fa-pulse"></i>
            </div>
          ) : (
            <>
              {Nodata ? (
                <h4 className="ml-3">No products to show</h4>
              ) : (
                prod
                  .filter((pro) =>pro.name.toLowerCase().includes(props.search.toLowerCase())
                  )
                  .map((product) => {
                    let exshowroom;
                    if (TaxDetails && TaxDetails.tax) {
                      TaxDetails.tax.map((tax) => {
                        var cgst = (product.price__c / 100) * tax.cgst__c;
                        var sgst = (product.price__c / 100) * tax.sgst__c;

                        exshowroom = product.price__c + cgst + sgst;
                      });
                    }

                    return (
                      <ProductCard
                        productname={product.name}
                        price={exshowroom}
                        battery_capacity={product.battery_capacity_in_v_ah__c}
                        battery={product.battery__c}
                        charging_time={product.charging_time__c}
                        id={product.id}
                      />
                    );
                  })
              )}
            </>
          )}
        </Row>
      </Tab>
      <Tab eventKey="cityspeed" title="Low Speed">
        <Row className="mt-5">
          {prod
            .filter((pro) => pro.product_category__c.includes("Low Speed"))
            .map((product) => {
              let exshowroom;
              if (TaxDetails && TaxDetails.tax) {
                TaxDetails.tax.map((tax) => {
                  var cgst = (product.price__c / 100) * tax.cgst__c;
                  var sgst = (product.price__c / 100) * tax.sgst__c;

                  exshowroom = product.price__c + cgst + sgst;
                });
              }
              return (
                <ProductCard
                  productname={product.name}
                  price={exshowroom}
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
          {prod
            .filter((pro) => pro.product_category__c.includes("High Speed"))
            .map((product) => {
              let exshowroom;
              if (TaxDetails && TaxDetails.tax) {
                TaxDetails.tax.map((tax) => {
                  var cgst = (product.price__c / 100) * tax.cgst__c;
                  var sgst = (product.price__c / 100) * tax.sgst__c;

                  exshowroom = product.price__c + cgst + sgst;
                });
              }
              return (
                <ProductCard
                  productname={product.name}
                  price={exshowroom}
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

export default AllProducts;
