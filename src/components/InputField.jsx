import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function InputField({ placeholder }) {
  //if given more time, would accept another prop that is an array of select options and then map through that, making this component dynamic and reusable
  return (
    <InputGroup placeholder="ee">
      <Form.Select className="input-filters">
        <option value="" selected disabled>
          {placeholder}
        </option>
      </Form.Select>
    </InputGroup>
  );
}
