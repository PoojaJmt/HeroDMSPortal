import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import { Form, InputGroup, Tabs, Tab } from "react-bootstrap";

export default function SchemeInfo(props) {
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h4>Schemes</h4>
          </Grid>
          {/* <Grid item xs={2}>
            <button className="refresh-btn">
              <i className="fa fa-refresh"></i> Reload
            </button>
          </Grid>
          <Grid item xs={4}>
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
          </Grid> */}
        </Grid>
      </div>
      <div className="tabspadding">
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              defaultActiveKey="schemedetails"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="schemedetails" title="Scheme Details">
                <div className="tabspadding">
                  <TableContainer component={Paper}>
                    <Table className="customer-table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell>Scheme Amount</TableCell>
                          <TableCell>Claim Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {props.location.state &&
                          props.location.state.length > 0 &&
                          props.location.state.map((dtl) => {
                            return (
                              <>
                                <TableRow>
                                  <TableCell>
                                    <Link to={"#"}>
                                      <p>
                                        <b>{dtl.product_name}</b>
                                      </p>
                                    </Link>
                                  </TableCell>
                                  <TableCell>{dtl.scheme_amount__c}</TableCell>
                                  <TableCell>{dtl.scheme_amount__c}</TableCell>
                                </TableRow>
                              </>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Tab>
            </Tabs>
          </Grid>
        </Grid>
      </div>

      <div>
        <Pagination count={10} shape="rounded" />
      </div>
    </React.Fragment>
  );
}
