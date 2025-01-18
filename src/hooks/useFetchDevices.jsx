import { useState, useEffect, useContext } from "react";
import LoaderContext from "../context/LoadingContext";
import { fetchDevices } from "../services/deviceServices";

const useFetchDevices = () => {
  const [devices, setDevices] = useState([]);
  const { loading, setLoading } = useContext(LoaderContext);

  const formatDates = (devices) => {
    return devices.map((device) => ({
      ...device,
      lastReportTime: new Date(device.lastReportTime).toLocaleString("en-US"),
      nextReportTime: new Date(device.nextReportTime).toLocaleString("en-US"),
    }));
  };

  const callFetchDevices = async () => {
    setLoading(true);
    const response = await fetchDevices();
    const formattedResponse = formatDates(response);
    setDevices(formattedResponse);
    setLoading(false);
  };

  useEffect(() => {
    callFetchDevices();
  }, []);

  return { devices, loading };
};

export default useFetchDevices;
