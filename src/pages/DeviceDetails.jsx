import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { RenderSummaryField } from "../components/SummaryField";
import SummaryField from "../components/SummaryField";
import { Spinner } from "../components/Spinner";
import useFetchDeviceDetails from "../hooks/useFetchDeviceDetails";

export default function DeviceDetails() {
  const { deviceDetails, loading } = useFetchDeviceDetails();

  return (
    <Container>
      <NavLink to="/device-list">
        <Button label="Back to device list" className="button-main" />
      </NavLink>
      <h1>
        Device Details -{" "}
        {deviceDetails?.name
          ? deviceDetails.name
          : deviceDetails.id
          ? deviceDetails.id
          : "N/A"}
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            <Col lg={3}>
              {deviceDetails.statusIndicators && (
                <div className="section">
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
                <div className="section">
                  <h2>Model</h2>
                  {Object.entries(deviceDetails.model || {}).map(
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
              <hr />
              {deviceDetails.owner && (
                <div className="section">
                  <h2>Owner</h2>
                  {Object.entries(deviceDetails.owner || {}).map(
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
              <hr />
            </Col>

            <Col lg={7}>
              {deviceDetails.lastKnownLocation && (
                <div className="section">
                  <h2>Position</h2>
                  <Row>
                    <Col lg={6}>
                      <img
                        src="https://placehold.co/400x300/000000/FFF"
                        alt="placeholder img"
                        className="img-fluid"
                      />
                      <SummaryField
                        label="Last Report Time"
                        value={new Date(
                          deviceDetails.lastReportTime
                        ).toString()}
                      />
                    </Col>
                    <Col className="padding-3" lg={6}>
                      {Object.entries(
                        deviceDetails.lastKnownLocation || {}
                      ).map(([key, value]) => (
                        <RenderSummaryField
                          key={key}
                          keyName={key}
                          value={value}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
