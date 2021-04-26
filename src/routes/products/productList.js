import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import scooty from "../../assets/images/scooty.png";
import "./products.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
      <Row>
        <Col xl="5"></Col>
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
              <Form.Control type="text" placeholder="Search product here.." />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xl="12">
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="City Speed" {...a11yProps(1)} />
              <Tab label="Comfort Speed" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className="invoice-dtl-tab">
            <Row>
              <div className="col-md-6">
                <div className="product-card">
                   <div className="product-card-top">
                  <div className="product-col-left">
                    <h2>OPTIMA E2</h2>
                    <h3>₹ 52,000</h3>
                    <ul>
                      <li>RANGE</li>
                      <li>85 KMPH</li>
                    </ul>
                    <ul>
                      <li>BATTERY</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="product-col-center">
                    <img src={scooty} />
                  </div>
                  <div className="product-col-right">
                    <h2>
                      4-5 <span>Hours</span>
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
                          <Link to="/product-info">More Details</Link>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-card">
                   <div className="product-card-top">
                  <div className="product-col-left">
                    <h2>OPTIMA E2</h2>
                    <h3>₹ 52,000</h3>
                    <ul>
                      <li>RANGE</li>
                      <li>85 KMPH</li>
                    </ul>
                    <ul>
                      <li>BATTERY</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="product-col-center">
                    <img src={scooty} />
                  </div>
                  <div className="product-col-right">
                    <h2>
                      4-5 <span>Hours</span>
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
                      <Link to="/product-info">More Details</Link>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-card">
                   <div className="product-card-top">
                  <div className="product-col-left">
                    <h2>OPTIMA E2</h2>
                    <h3>₹ 52,000</h3>
                    <ul>
                      <li>RANGE</li>
                      <li>85 KMPH</li>
                    </ul>
                    <ul>
                      <li>BATTERY</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="product-col-center">
                    <img src={scooty} />
                  </div>
                  <div className="product-col-right">
                    <h2>
                      4-5 <span>Hours</span>
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
                      <Link to="/product-info">More Details</Link>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-card">
                   <div className="product-card-top">
                  <div className="product-col-left">
                    <h2>OPTIMA E2</h2>
                    <h3>₹ 52,000</h3>
                    <ul>
                      <li>RANGE</li>
                      <li>85 KMPH</li>
                    </ul>
                    <ul>
                      <li>BATTERY</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="product-col-center">
                    <img src={scooty} />
                  </div>
                  <div className="product-col-right">
                    <h2>
                      4-5 <span>Hours</span>
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
                      <Link to="/product-info">More Details</Link>
                      </div>
                  </div>
                </div>
              </div>
            </Row>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            className="invoice-dtl-tab"
          ></TabPanel>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
