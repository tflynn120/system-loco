import DeviceDetails from "./layouts/DeviceDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import DeviceList from "./layouts/DeviceList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/device-list" replace={true} />}
          />
          <Route path="/device-list" element={<DeviceList />} />
          <Route path="/device-list/:deviceId" element={<DeviceDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
