import React from "react";
import Grid from '@material-ui/core/Grid';
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';
import Resubmission from './resubmission';
import Submitted from './submitted';
import Approved from './approved';
import Rejected from './rejected';
import AllList from "./all";

export default function SchemeList() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>Scheme Claims</h4>
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
                <Grid container>
                    <Grid item xs={12}>
                        <Tabs defaultActiveKey="all" transition={false} id="noanim-tab-example">
                            <Tab eventKey="all" title="All">
                                <AllList />
                            </Tab>
                            <Tab eventKey="resubmission" title="Available for resubmission">
                                <Resubmission />
                            </Tab>
                            <Tab eventKey="submittied" title="Submitted">
                                <Submitted />
                            </Tab>
                            <Tab eventKey="approved" title="Approved">
                                <Approved />
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                                <Rejected />
                            </Tab>
                        </Tabs>
                    </Grid>
                </Grid>
            </div> 
        </React.Fragment>
    );
}