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
import { Link } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';


function createData(cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount) {
    return { cusrtomername, schemeapplied, claimsubmissiondate, schemeamount, expectedclaimamount };
}
const rows = [createData("Cash Discount", "Pan India", "24/04/2021", "24/04/2021")];
function Row(props) {
  
    const { row } = props;

    return (
        <React.Fragment>

            <TableRow>
               
                <TableCell>
                    <Link to={{ pathname: "/scheme-info" }}><p><b>Hero Electric “Gudi Padwa offer"</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.cusrtomername}
                </TableCell>
                <TableCell>{row.schemeapplied}</TableCell>
                <TableCell>{row.claimsubmissiondate}</TableCell>
                <TableCell>{row.schemeamount}</TableCell>
            </TableRow>
            <TableRow>
               
               <TableCell>
                   <Link to={{ pathname: "/scheme-info" }}><p><b>“Gudi Padwa offer" Online booking</b></p></Link>
               </TableCell>
               <TableCell component="th" scope="row">
                   {row.cusrtomername}
               </TableCell>
               <TableCell>{row.schemeapplied}</TableCell>
               <TableCell>{row.claimsubmissiondate}</TableCell>
               <TableCell>{row.schemeamount}</TableCell>
           </TableRow>
          
        </React.Fragment>
    );
}
export default function Schemes() {
    return (
        <React.Fragment>
             <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Schemes</h4>
                    </Grid>
                    <Grid item xs={2}>
                        <button className="refresh-btn"><i className="fa fa-refresh"></i> Reload</button>
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
                    <Table>
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
                            {rows.map(row => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
}