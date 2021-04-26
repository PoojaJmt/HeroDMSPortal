import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
import logo from "../../assets/images/Hero-Electric-Bike-Logo-PNG.png";

function InvoiceDownload() {
  return (
    <Container fluid>
    <Row>
    <Col xl="5"></Col>
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
          <Form.Control type="text" placeholder="Search here.." />
        </InputGroup>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col md={{ span: 4, offset: 8 }}>
      <button className="btn-gen"><i className="fa fa-download" ></i> Print Invoice</button>
    </Col>
  </Row>
  

    <div className="invoice-copy">
      <h5>Invoice</h5>
      <div className="dealer-detail">
        <h6>Dealer's Name</h6>
        <Row>
          <Col xl="6">
            <img src={logo} />
          </Col>
          <Col xl="6">
            <p>Dealer Address</p>
            <p>CITY: dealer city</p>
            <p>
              STATE: dealer state
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PINCODE:
              457777
            </p>
            <p>CONTACT NO. dealer contact no.</p>
            <p>EMAIL:</p>
            <p>
              <b>INVOICE NO.:</b>
            </p>
            <p>
              <b>INVOICE DATE</b>
            </p>
          </Col>
        </Row>
        <div className="black-border"></div>
        <Row>
          <Col xl="12">
            <p>CUSTOMER NAME: SUKHBIR KAUR</p>
            <p>ADDRESS:CUSTOMER ADDRESS</p>
            <p>
              CITY:ABC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              STATE:
            </p>
            <p>Customer GSTIN No.</p>
            <p>CONTACT NUMBER:867678788</p>
            <p>EMAIL ID: customer email</p>
            <p>
              <b>GST NO.</b>
            </p>
          </Col>
        </Row>
        <Table responsive bordered className="vehicle-invoice">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>DESCRIPTION</th>
              <th>RATE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <b>HERO ELECTRIC BIKE</b>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MODEL</td>
              <td>NYX LI</td>
              <td>63,800</td>
            </tr>
            <tr>
              <td colspan="3">
                <span>
                  <b>TOTAL INVOICE VALUE</b>
                </span>
              </td>
              <td>63,800</td>
            </tr>
            <tr>
              <td colspan="3">
                <span>SGST 2.5% </span>
              </td>
              <td>1596</td>
            </tr>
            <tr>
              <td colspan="3">
                <span>CGST 2.5%</span>
              </td>
              <td>1596</td>
            </tr>
            <tr>
              <td colspan="3">
                <span>IGST 2.5%</span>
              </td>
              <td>1596</td>
            </tr>
            <tr>
              <td colspan="3" style={{ textAlign: "left" }}>
                <b>Ex-Showroom Price(Rs.)</b>
              </td>
              <td>66,990</td>
            </tr>
            <tr>
              <td colspan="3" style={{ textAlign: "left" }}>
                <b>Khushiyon ka tyohaar</b>
              </td>
              <td>5000</td>
            </tr>
            <tr>
              <td colspan="3" style={{ borderTop: "2px solid #000" }}>
                <span style={{ textAlign: "left" }}>
                  <b>Total Payable Amount</b>
                </span>
              </td>
              <td>61,990</td>
            </tr>
            <tr>
              <td colspan="4" style={{ textAlign: "center" }}>
                <i>rupees (in words)</i>
                <b>FIFTY THOUSAND NINE HUNDRED NINTY</b>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="Note">
          <h4>Note:</h4>
          <ol>
            <li>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a documen.
            </li>
            <li>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a documen.
            </li>

            <li>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a documen.
            </li>

            <li>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a documen.
            </li>
          </ol>
        </div>
        <Row>
          <Col xl="6">
            <p className="sign-cus">(signature of customer)</p>
          </Col>
          <Col xl="6">
            <p>
              <i>for</i>Dealer's Name
            </p>
            <p className="sign-del">(authorised signature)</p>
          </Col>
        </Row>
        <div className="invoice-footer">
          <p>
            <i>HERO electric acknowledges your contribution</i>
          </p>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default InvoiceDownload;
