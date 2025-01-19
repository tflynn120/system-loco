import DeviceDetails from "./pages/DeviceDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./index.scss";
import DeviceList from "./pages/DeviceList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import DeviceMap from "./pages/DeviceMap";
import { LoaderProvider } from "./context/LoadingContext";

const DeviceListLayout = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={12} lg={2} xl={2} className="padding-0">
        <Sidebar />
      </Col>
      <Col sm={12} md={12} lg={10} xl={10}>
        <DeviceList />
      </Col>
    </Row>
  </Container>
);

const DeviceMapLayout = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={12} lg={2} xl={2} className="padding-0">
        <Sidebar />
      </Col>
      <Col sm={12} md={12} xl={10} lg={10}>
        <DeviceMap />
      </Col>
    </Row>
  </Container>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LoaderProvider>
        <Routes>
          <Route path="/device-list" element={<DeviceListLayout />} />
          <Route path="/device-map" element={<DeviceMapLayout />} />
          <Route path="/device-list/:deviceId" element={<DeviceDetails />} />
          <Route
            path="*"
            element={<Navigate to="/device-list" replace={true} />}
          />
        </Routes>
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
