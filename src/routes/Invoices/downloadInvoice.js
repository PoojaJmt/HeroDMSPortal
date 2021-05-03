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
          <button className="btn-gen">
            <i className="fa fa-download"></i> Print Invoice
          </button>
        </Col>
      </Row>

      <div className="invoice-copy">
        <h5>Invoice</h5>
        <div className="dealer-detail">
          <Row>
            <Col xl="6">
              <h6>Details of Customer</h6>
            </Col>
            <Col xl="6">
              <h6> Details of Dealer</h6>
            </Col>
          </Row>
          <Row>
            <Col xl="3">
              <p>Invoice No. & Date</p>
              <p>Name</p>
              <p>Address</p>
              <p>Mobile No.</p>
              <p>Email Id</p>
              <p>Aadhar/Pan No.</p>
            </Col>
            <Col xl="3">
              <p>12345 23/12/2021</p>
              <p>Sukhbir kaur</p>
              <p>abc enterprises, new Delhi</p>
              <p>1234567890</p>
              <p>sukhbir@gmail.com</p>
              <p>3454556666666666</p>
            </Col>
            <Col xl="3">
              <p>Dealer's Name</p>
              <p>Dealer's Fame-II Code</p>
              <p>Address</p>
              <p>Mobile No.</p>
              <p>Email Id</p>
              <p>GSTN No.</p>
            </Col>
            <Col xl="3">
              <p>abc</p>
              <p>1234</p>
              <p>Delhi</p>
              <p>1234567890</p>
              <p>abc@gmail.com</p>
              <p>123578809099</p>
            </Col>
          </Row>
          <div className="black-border"></div>

          <Table responsive bordered className="vehicle-invoice">
            <thead>
              <tr>
                <th>S.No.</th>
                <th colspan="8">Description of Vehicles</th>
                <th>Rate per Unit (INR)</th>
                <th>Amount (Rs.)</th>
              </tr>
              <tr>
                <th></th>
                <th>Model No.</th>
                <th>Chassis No.</th>
                <th>Motor No.</th>
                <th>Battery Chemistry Details</th>
                <th colspan="2">Battery</th>
                <th>Colour</th>
                <th>HSN Code</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>

                <th></th>
                <th></th>
                <th></th>
                <th>No.</th>
                <th>Capacity</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>NYX LI</td>
                <td>1234</td>
                <td>abc</td>
                <td>1</td>
                <td>5000</td>
                <td>black</td>
                <td>87116020</td>
                <td>$ 1200</td>
                <td>63,800</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1234</td>
                <td>NYX LI</td>
                <td>1234</td>
                <td>abc</td>
                <td>1</td>
                <td>5000</td>
                <td>black</td>
                <td>87116020</td>
                <td>$ 1200</td>
                <td>63,800</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1234</td>
                <td>NYX LI</td>
                <td>1234</td>
                <td>abc</td>
                <td>1</td>
                <td>5000</td>
                <td>black</td>
                <td>87116020</td>
                <td>$ 1200</td>
                <td>63,800</td>
              </tr>
              <tr>
                <td colspan="10">
                  <span>
                    <b>TOTAL INVOICE VALUE</b>
                  </span>
                </td>
                <td>63,800</td>
              </tr>
              <tr>
                <td colspan="10">
                  <span>SGST 2.5% </span>
                </td>
                <td>1596</td>
              </tr>
              <tr>
                <td colspan="10">
                  <span>CGST 2.5%</span>
                </td>
                <td>1596</td>
              </tr>

              <tr>
                <td colspan="10" style={{ textAlign: "left" }}>
                  <b>Grand Total</b>
                </td>
                <td>66,990</td>
              </tr>
              <tr>
                <td colspan="10" style={{ textAlign: "left" }}>
                  <b>LESS FAME -II Incentive</b>
                </td>
                <td>1000</td>
              </tr>
              <tr>
                <td colspan="10" style={{ textAlign: "left" }}>
                  <b>Khushiyon ka tyohaar</b>
                </td>
                <td>5000</td>
              </tr>
              <tr>
                <td colspan="10" style={{ borderTop: "2px solid #000" }}>
                  <span style={{ textAlign: "left" }}>
                    <b>NET Payable Amount ( Ex-Show Room Customer's Price)</b>
                  </span>
                </td>
                <td>61,990</td>
              </tr>
              <tr>
                <td colspan="11" style={{ textAlign: "center" }}>
                  <i>rupees (in words)</i>
                  <b>FIFTY THOUSAND NINE HUNDRED NINTY</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="Note">
            <h4>Note:</h4>
            <ol>
              <li>Goods once sold will not be taken back.</li>
              <li>All disputes subject to dealer city jurisdiction.</li>

              <li>Registration insurance and local taxes are extra.</li>

              <li>
              Your Hero Electric Bike warranty as per terms and conditions in owner maunal. 
              </li>
              <li>Warranty is applicable as per owner manual & on compliance of periodic maintance. </li>
              <li>Battery is a consumable item and its performance and capacity (AH) decreases over a period of time with usage, for better performance, follow the owner manual.</li>
              <li>Hero Electric acknowledge your contribution for a cleaner and green environment by choosing Hero Electric Bike.</li>
              <li>For any  queries or assistance, it will be our please to assist you. Please feel free to call us on our Customer help no………..(between 09:00Am to 04:00PM)</li>
              <li>Undertaking I have taken possenssion of Hero Electric Bikes in good conditions as per the particulars mentioned in the retail invoice after checking the same to my satisfaction. </li>
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
