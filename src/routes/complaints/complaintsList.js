import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../customers/customer.css";
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
function ComplaintsList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container fluid>
     <Row>
        <Col xl="5">
          <h4>Complaints</h4>
        </Col>
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
              <Form.Control type="text" placeholder="Search Complaint No.." />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
    <Col md={{ span: 4, offset: 8 }}>
      <button className="btn-gen"><Link to="/new-complaint"> New Complaint</Link></button>
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
              <Tab label="Pending" {...a11yProps(1)} />
              <Tab label="Resolved" {...a11yProps(2)} />

            </Tabs>
          </AppBar>
          <TabPanel
            value={value}
            index={0}
            className="customer-info-page"
          >
              <div className="tabspadding" style={{width:"100%",textAlign:"center"}}>
          <TableContainer component={Paper}>
            <Table className="customer-table">
              <TableHead >
                <TableRow >
                  <TableCell>Complaint No.</TableCell>
                  <TableCell>Complaint Date</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Sub Category</TableCell>
                  <TableCell>Description</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link to="/complaint-info">CN-12345</Link>
                  </TableCell>
                  <TableCell>24/04/2021</TableCell>
                  <TableCell>Product Issue</TableCell>
                  <TableCell>Damage in transit</TableCell>
                  <TableCell>Foot mats damaged</TableCell>
                 
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Link to="/complaint-info">CN-12345</Link>
                  </TableCell>
                  <TableCell>24/04/2021</TableCell>
                  <TableCell>Product Issue</TableCell>
                  <TableCell>Damage in transit</TableCell>
                  <TableCell>Foot mats damaged</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/complaint-info">CN-12345</Link>
                  </TableCell>
                  <TableCell>24/04/2021</TableCell>
                  <TableCell>Product Issue</TableCell>
                  <TableCell>Damage in transit</TableCell>
                  <TableCell>Foot mats damaged</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/complaint-info">CN-12345</Link>
                  </TableCell>
                  <TableCell>24/04/2021</TableCell>
                  <TableCell>Product Issue</TableCell>
                  <TableCell>Damage in transit</TableCell>
                  <TableCell>Foot mats damaged</TableCell>
                 
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link to="/complaint-info">CN-12345</Link>
                  </TableCell>
                  <TableCell>24/04/2021</TableCell>
                  <TableCell>Product Issue</TableCell>
                  <TableCell>Damage in transit</TableCell>
                  <TableCell>Foot mats damaged</TableCell>
                 
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

          </TabPanel>
        </Col>
      </Row>
    </Container>
  );
}

export default ComplaintsList;
