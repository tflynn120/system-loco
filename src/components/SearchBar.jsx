import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Row>
      <Col lg={4} md={6} sm={12}>
        <InputGroup>
          <Form.Control
            className="input-searchbar"
            placeholder="Search devices"
          />
        </InputGroup>
      </Col>
    </Row>
  );
}
