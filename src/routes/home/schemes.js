import React, { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import { Form, InputGroup, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetMasterSchemeClaimsActionFn } from "redux/actions/schemeAction";

export default function Schemes() {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);
  const [loading, setLoading] = useState(true);
  const [schemeClaims, setschemeClaims] = useState([]);
  const Schemes = useSelector(
    (state) => state.SchemeClaims.allMasterSchemeClaims
  );

  useEffect(() => {
    let data = {
      dealer_id: LoginData.dealer__c,
      state_id: LoginData.state__c,
    };
    dispatch(GetMasterSchemeClaimsActionFn(data));
  }, []);

  useEffect(() => {
    if (Schemes.schemes && Schemes.schemes.length > 0) {
      setschemeClaims(Schemes.schemes);
      setLoading(false);
    }
  }, [Schemes]);

  console.log(Schemes);
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h4>Schemes</h4>
          </Grid>
          <Grid item xs={2}>
            <button className="refresh-btn" onClick={()=>window.location.reload(true)}>
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
          </Grid>
        </Grid>
      </div>
      <div className="tabspadding">
        <TableContainer component={Paper}>
          <Table className="customer-table">
            <TableHead>
              <TableRow>
                <TableCell>Scheme Name</TableCell>
                <TableCell>Scheme Type</TableCell>
                <TableCell>Scheme Scope</TableCell>
                <TableCell>Valid From</TableCell>
                <TableCell>Valid Till</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan="5">
                    <div className="loader">
                      <i class="fa fa-spinner fa-pulse"></i>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {schemeClaims && schemeClaims.length > 0 ? (
                    schemeClaims.map((scheme) => {
                      let date = new Date(scheme.active_from__c);
                      let year = date.getFullYear();
                      let month = date.getMonth() + 1;
                      let dt = date.getDate();

                      if (dt < 10) {
                        dt = "0" + dt;
                      }
                      if (month < 10) {
                        month = "0" + month;
                      }

                      let todate = new Date(scheme.active_to__c);

                      return (
                        <TableRow>
                          <TableCell>
                            <Link
                              to={{
                                pathname: "/scheme-info",
                                state: scheme.schemesDetails,
                              }}
                            >
                              <p>
                                <b>{scheme.name}</b>
                              </p>
                            </Link>
                          </TableCell>

                          <TableCell>{scheme.scheme_type__c}</TableCell>
                          <TableCell>{scheme.scheme_scope__c}</TableCell>
                          <TableCell>{year + "-" + month + "-" + dt}</TableCell>
                          <TableCell>
                            {todate.getFullYear() +
                              "-" +
                              (todate.getMonth() + 1) +
                              "-" +
                              todate.getDate()}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <h4 className="m-3">No data</h4>
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}
