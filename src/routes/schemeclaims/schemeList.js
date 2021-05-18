import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Form,
  InputGroup,
  Tabs,
  Tab,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Resubmission from "./resubmission";
import Submitted from "./submitted";
import Approved from "./approved";
import Rejected from "./rejected";
import AllList from "./all";
import { useDispatch, useSelector } from "react-redux";
import { GetSchemeClaimsActionFn } from "redux/actions/schemeAction";

export default function SchemeList() {
  const dispatch = useDispatch();
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2021");
  const LoginData = useSelector((state) => state.LoginData.loginSuccesData);
  const ScehemeClaims = useSelector(
    (state) => state.SchemeClaims.allSchemeClaims
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [allClaims, setAllClaims] = useState([]);
  const [submitted, setsubmitted] = useState([]);
  const [approved, setapproves] = useState([]);
  const [resubmission, setresubmission] = useState([]);
  const [rejected, setrejected] = useState([]);
  useEffect(() => {
    Getschemes(year, month);
  }, []);
  useEffect(() => {
    if (
      ScehemeClaims?.claims?.Submitted &&
      ScehemeClaims?.claims?.Submitted.length > 0
    ) {
      setsubmitted(ScehemeClaims.claims.Submitted);
    }
    if (
      ScehemeClaims?.claims?.Approved &&
      ScehemeClaims?.claims?.Approved.length > 0
    ) {
      setapproves(ScehemeClaims.claims.Approved);
    }
    if (
      ScehemeClaims?.claims?.approved_reClaim &&
      ScehemeClaims?.claims?.approved_reClaim.length > 0
    ) {
      setresubmission(ScehemeClaims.claims.approved_reClaim);
    }
    if (
      ScehemeClaims?.claims?.rejected &&
      ScehemeClaims?.claims?.rejected.length > 0
    ) {
      setrejected(ScehemeClaims.claims.rejected);
    }
  }, [ScehemeClaims]);

  useEffect(() => {
    console.log(submitted);
    var all = [];
    all.push(submitted, rejected, approved, resubmission);
    const result = [].concat(...all)
    console.log(result);

    setAllClaims(result)
  }, [submitted]);

  const Getschemes = (yr, mn) => {
    let data = {
      dealer_id: LoginData.dealer__c,
      offset: 0,
      limit: 100,
      date: `${yr}-${mn}-1`,
    };
    dispatch(GetSchemeClaimsActionFn(data));
  };

  const changeYear = (y) => {
    Getschemes(y, month);
    setYear(y);
  };
  const changeMonth = (m) => {
    Getschemes(year, m);
    setMonth(m);
  };
  console.log(ScehemeClaims);

  const filterSubmitted = () => {
    return submitted.filter((scheme) => scheme.name.includes(searchTerm));
  };
  const filterResubmit = () => {
    return resubmission.filter((scheme) => scheme.name.includes(searchTerm));
  };
  const filterApproved = () => {
    return approved.filter((scheme) => scheme.name.includes(searchTerm));
  };
  const filterRejected = () => {
    return rejected.filter((scheme) => scheme.name.includes(searchTerm));
  };
  const filterAll = () => {
    return allClaims.filter((scheme) => scheme.name.includes(searchTerm));
  };

  return (
    <React.Fragment>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h4>Scheme Claims</h4>
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
                <Form.Control
                  type="text"
                  placeholder="Search here.."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
              </InputGroup>
            </Form.Group>
          </Grid>
        </Grid>
      </div>
      <Container fluid className="homecardcontainer">
        <Row>
          <Col md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Month</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => changeMonth(e.target.value)}
                value={month}
              >
                <option value="1">January </option>
                <option value="2">February </option>
                <option value="3">March </option>
                <option value="4">April </option>
                <option value="5">May </option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August </option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Year</Form.Label>
              <Form.Control
                as="select"
                value={year}
                onChange={(e) => changeYear(e.target.value)}
              >
                <option value="2021" selected>
                  2021
                </option>
                <option value="2022">2022</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <div className="tabspadding">
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              defaultActiveKey="all"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="all" title="All">
                <AllList data={filterAll()} />
              </Tab>
              <Tab eventKey="resubmission" title="Available for resubmission">
                <Resubmission data={filterResubmit()} />
              </Tab>
              <Tab eventKey="submittied" title="Submitted">
                <Submitted data={filterSubmitted()} />
              </Tab>
              <Tab eventKey="approved" title="Approved">
                <Approved data={filterApproved()} />
              </Tab>
              <Tab eventKey="rejected" title="Rejected">
                <Rejected data={filterRejected()} />
              </Tab>
            </Tabs>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
