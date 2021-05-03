import React from "react";
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';

export default function OrdersList() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Orders</h4>
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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                       <a href="/new-order"><button className="resubmit-btn">New Order</button></a>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    );
}