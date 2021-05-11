import React from "react";
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
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";


function createData(orderdate, totalquantity, amountpayable, stage) {
    return { orderdate, totalquantity, amountpayable, stage};
}
const rows = [createData("27/04/2021", "40", "₹ 1200000", "confirm with 25% payment")];
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
                    <Link to={{ pathname: "/orders/order-dtl" }}><p><b>OD-19921</b></p></Link>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orderdate}
                </TableCell>
                <TableCell>{row.totalquantity}</TableCell>
                <TableCell>{row.amountpayable}</TableCell>
                <TableCell>{row.stage}</TableCell>
               
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
                                    <th>Product</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                </tr>
                                <tr>
                                    <td className="trpadding">Optima</td>
                                    <td>Black</td>
                                    <td>20</td>
                                   
                                </tr>
                                <tr>
                                    <td className="trpadding">Zion</td>
                                    <td>Black</td>
                                    <td>20</td>
                                   
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
    return (
        <React.Fragment>


            <div className="tabspadding">
                <TableContainer component={Paper}>
                    <Table className="customer-table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Order No.</TableCell>
                                <TableCell>Order Date</TableCell>
                                <TableCell>Total Quantity</TableCell>
                                <TableCell>Total Amount Payable</TableCell>
                                <TableCell>Stage</TableCell>
                                
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
            <div>
                <Pagination count={10} shape="rounded" />
            </div>
        </React.Fragment>
    );
}