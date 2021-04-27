import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../customers/customer.css";
import { Label } from "@material-ui/icons";
import { FormGroup, Select } from "@material-ui/core";

function NewComplaint() {
  return (
    <Container fluid>
      <Row>
        <Col xl="12">
          <h4>New Complaint</h4>
        </Col>
       
      </Row>

      <Row className="mt-5">
        <Col xl="6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option>select category</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-5">
            <Form.Label>Order No.</Form.Label>
            <Form.Control type="text" placeholder="Enter order no." />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-5">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
        <Col xl="6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sub Category</Form.Label>
            <Form.Control as="select">
              <option>select sub-category</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-5">
            <Form.Label>Invoice No.</Form.Label>
            <Form.Control type="text" placeholder="Enter order no." />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-5">
            <Form.Label>Attachments</Form.Label>
            <div className="image-holder">
              <input type="file" className="upload-btn-input"></input>
              <button className="upload-btn">
                <i className="fa fa-upload"></i>Upload Image
              </button>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Row>
          <button className="btn-submit">SUBMIT</button>
      </Row>
    </Container>
  );
}

export default NewComplaint;
