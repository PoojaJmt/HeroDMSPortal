import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
import Grid from "@material-ui/core/Grid";
import { Form, InputGroup, Tabs, Tab } from "react-bootstrap";
import Pagination from "@material-ui/lab/Pagination";
import Approved from "./approved";

import equal from "fast-deep-equal";

export default function Rejected(props) {
  const updateTimer = React.useRef(null);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openid,setopenid] = useState(null)

  //   const [month,setMonth] = useState(04);
  //   const [year,setYear] = useState(2021);
  //   const [date,setDate] = useState(01);
  // Submitted: 6, Approved: 1, approved_reClaim

  return (
    <React.Fragment key={props.year}>
      <div className="tabspadding">
        <TableContainer component={Paper}>
          <Table className="customer-table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Claim Id</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Scheme Applied</TableCell>
                <TableCell>Claim Submission Date</TableCell>
                <TableCell>Scheme Amount</TableCell>
                <TableCell>Expected Claim Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Chassis No.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data &&
                props.data.length > 0 &&
                props.data.map((rows, i) => {
                  console.log(rows);
                  return (
                    <>
                      <TableRow key={i}>
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                           
                          >
                            {openid === i ? (
                              <RemoveCircleOutline  onClick={() => {
                                setOpen(!open)
                                setopenid(null)
                            }}/>
                            ) : (
                              <AddCircleOutline  onClick={() => {
                                setOpen(!open)
                                setopenid(i)
                            }}/>
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <Link to={{ pathname: `/claim-info/${rows.name}` }}>
                            <p>
                              <b>{rows.name}</b>
                            </p>
                          </Link>
                        </TableCell>
                        <TableCell>{rows.customer_name__c}</TableCell>
                        <TableCell>{rows.scheme_applicable_name}</TableCell>
                        <TableCell>
                          {rows.scheme_claim_submission_date__c}
                        </TableCell>
                        <TableCell>₹ {rows.he_share__c}</TableCell>
                        <TableCell>
                          ₹ {rows.expected_claim_amount_by_dealer__c}
                        </TableCell>
                        <TableCell>{rows.status__c}</TableCell>
                        <TableCell>{rows.chassis_no__c}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan="9" id="no-border-td">
                          <Collapse in={openid === i} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                              <table
                                responsive
                                bordered
                                hover
                                className="scheme-table"
                              >
                                <tr>
                                  <th>Field Team Status</th>
                                  <th>Back Office Status</th>
                                  <th>Account Verification Status</th>
                                  <th>Credit Note Status</th>
                                </tr>
                                <tr>
                                  <td className="trpadding">
                                    {rows.field_team_status__c}
                                  </td>
                                  <td>{rows.back_office_status__c}</td>
                                  <td>{rows.account_verification_status__c}</td>
                                  <td>-</td>
                                </tr>
                              </table>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>{/* <Pagination count={10} shape="rounded" /> */}</div>
    </React.Fragment>
  );
}
