import { Col, Row } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({ devices }) {
  console.log(devices);
  return (
    <Row>
      <Col lg={12}>
        <table>
          <TableHeader />
          <tbody>
            {devices.map((device) => (
              <TableRow key={device.id} device={device} />
            ))}
          </tbody>
        </table>
      </Col>
    </Row>
  );
}
