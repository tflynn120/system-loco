import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import InputField from "../components/InputField";

export default function DeviceListInputs() {
  // Given more time, this layout component would need passing props to the table component so they can correctly filter the data
  return (
    <Form className="mb-1">
      <SearchBar />

      <Row>
        <Col xs={6} sm={4} md={3} lg={3} xl={2}>
          <InputField placeholder="Manage Filters" />
        </Col>
        <Col xs={6} sm={4} md={3} lg={3} xl={2}>
          <InputField placeholder="Label" />
        </Col>

        <Col xs={6} sm={4} md={3} lg={3} xl={2}>
          <InputField placeholder="Model" />
        </Col>

        <Col xs={6} ms={2} md={3} lg={2}>
          <Button disabled className="secondary" label="Reset Filters"></Button>
        </Col>
      </Row>
    </Form>
  );
}
