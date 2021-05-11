import React, { useEffect, useState } from "react";
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
import Resubmission from "./resubmission";
import Submitted from "./submitted";
import Approved from "./approved";
import Rejected from "./rejected";
import { useDispatch, useSelector } from "react-redux";
import { GetSchemeClaimsActionFn } from "redux/actions/schemeAction";

function createData(
  cusrtomername,
  schemeapplied,
  claimsubmissiondate,
  schemeamount,
  expectedclaimamount,
  status,
  chassisno
) {
  return {
    cusrtomername,
    schemeapplied,
    claimsubmissiondate,
    schemeamount,
    expectedclaimamount,
    status,
    chassisno,
  };
}
const rows = [
  createData(
    "Sukhbir",
    "Kaur",
    "4578451100",
    "₹ 50.00",
    "₹ 10.00",
    "Yes",
    "NYXE030593"
  ),
];
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen1(!open1)}
          >
            {open1 ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen2(!open2)}
          >
            {open2 ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen3(!open3)}
          >
            {open3 ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen4(!open4)}
          >
            {open4 ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen5(!open5)}
          >
            {open5 ? <RemoveCircleOutline /> : <AddCircleOutline />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={{ pathname: "/claim-info" }}>
            <p>
              <b>ENQ-1102</b>
            </p>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cusrtomername}
        </TableCell>
        <TableCell>{row.schemeapplied}</TableCell>
        <TableCell>{row.claimsubmissiondate}</TableCell>
        <TableCell>{row.schemeamount}</TableCell>
        <TableCell>{row.expectedclaimamount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.chassisno}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open5} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <table responsive bordered hover className="scheme-table">
                <tr>
                  <th>Field Team Status</th>
                  <th>Back Office Status</th>
                  <th>Account Verification Status</th>
                  <th>Credit Note Status</th>
                </tr>
                <tr>
                  <td className="trpadding">Rejected</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function AllList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);
  const Products = useSelector((state) => state.schemeClaims);
  //   const [month,setMonth] = useState(04);
  //   const [year,setYear] = useState(2021);
  //   const [date,setDate] = useState(01);

  useEffect(() => {
    //   let y = parseInt("2021")
    //   let m = parseInt("4")
    //   let d = parseInt("1")

    // let da = new Date("2021-4-1");
    // console.log(da);

    let data = {
      dealer_id: LoginData.dealer__c,
      offset: 0,
      limit: 100,
      date: "2021-4-10",
    };
    dispatch(GetSchemeClaimsActionFn(data));

    console.log(LoginData);
  }, []);
  return (
    <React.Fragment>
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
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Pagination count={10} shape="rounded" />
      </div>
    </React.Fragment>
  );
}
