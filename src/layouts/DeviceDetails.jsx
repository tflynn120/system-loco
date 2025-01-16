import { useEffect, useState } from "react";
import "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavLink, useParams } from "react-router-dom";
import { DEVICE_DETAIL_ENDPOINT } from "../constants";
import Button from "../components/Button";
import { RenderSummaryField } from "../components/SummaryField";
import SummaryField from "../components/SummaryField";
import { Col } from "react-bootstrap";
export default function DeviceDetails() {
  const [deviceDetails, setDeviceDetails] = useState({});
  let { deviceId } = useParams();

  console.log(deviceDetails);

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      try {
        const response = await fetch(`${DEVICE_DETAIL_ENDPOINT}${deviceId}`);
        const data = await response.json();
        setDeviceDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeviceDetails();
  }, [deviceId]);

  return (
    <div className="device-details">
      <Container className="margin-top-3 section-container" fluid>
        <h1>
          Device Details -
          {deviceDetails.name
            ? deviceDetails.name
            : deviceDetails.id
            ? deviceDetails.id
            : "N/A"}
        </h1>
        <NavLink className="text-decoration-none" to="/device-list">
          <Button className="back-button" label="Back to device list" />
        </NavLink>
        <Row>
          <Col lg={3}>
            {deviceDetails.statusIndicators && (
              <div>
                <h2>Summary</h2>
                <SummaryField label="Id" value={deviceDetails.id} />
                <SummaryField label="Name" value={deviceDetails.name} />
                <SummaryField
                  label="Next Report Time"
                  value={new Date(deviceDetails.nextReportTime).toString()}
                />
              </div>
            )}
            <hr />
            {deviceDetails.model && (
              <div>
                <h2>Model</h2>
                {Object.entries(deviceDetails.model || {}).map(
                  ([key, value]) => (
                    <RenderSummaryField key={key} keyName={key} value={value} />
                  )
                )}
              </div>
            )}
            <hr />
            {deviceDetails.owner && (
              <div>
                <h2>Owner</h2>
                {Object.entries(deviceDetails.owner || {}).map(
                  ([key, value]) => (
                    <RenderSummaryField key={key} keyName={key} value={value} />
                  )
                )}
              </div>
            )}
            <hr />
          </Col>

          <Col lg={7}>
            {deviceDetails.lastKnownLocation && (
              <div className="section-container">
                <h2>Position</h2>
                <Row>
                  <Col lg={6}>
                    <img
                      src="https://placehold.co/400x300/000000/FFF"
                      alt="placeholder img"
                      className="position-img"
                    />
                    <SummaryField
                      label="Last Report Time"
                      value={new Date(deviceDetails.lastReportTime).toString()}
                    />
                  </Col>
                  <Col className="padding-3" lg={6}>
                    {Object.entries(deviceDetails.lastKnownLocation || {}).map(
                      ([key, value]) => (
                        <RenderSummaryField
                          key={key}
                          keyName={key}
                          value={value}
                        />
                      )
                    )}
                  </Col>
                  <hr />
                </Row>
              </div>
            )}
          </Col>

          <Col lg={2}>
            <Row>
              {deviceDetails.statusIndicators && (
                <div className="section-container">
                  <h2>Status</h2>
                  {Object.entries(deviceDetails.statusIndicators || {}).map(
                    ([key, value]) => (
                      <RenderSummaryField
                        key={key}
                        keyName={key}
                        value={value}
                      />
                    )
                  )}
                </div>
              )}
            </Row>
          </Col>
        </Row>

        {deviceDetails?.labels?.length > 0 && (
          <div className="section-container">
            <h2>labels</h2>
            {Object.entries(deviceDetails.labels || {}).map(([key, value]) => (
              <RenderSummaryField key={key} keyName={key} value={value} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
