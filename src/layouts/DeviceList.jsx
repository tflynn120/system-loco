import { useEffect, useState } from "react";
import { DEVICE_LIST_ENDPOINT } from "../constants";
import Table from "../components/Table";

export default function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(DEVICE_LIST_ENDPOINT);
        const data = await response.json();
        setDevices(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <div>
      <h1>Device List</h1>
      <Table devices={devices} />
    </div>
  );
}
