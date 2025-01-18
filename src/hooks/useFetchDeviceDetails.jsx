import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DEVICE_DETAIL_ENDPOINT } from "../constants";
import LoaderContext from "../context/LoadingContext";

const useFetchDeviceDetails = () => {
  const [deviceDetails, setDeviceDetails] = useState({});
  const { loading, setLoading } = useContext(LoaderContext);
  const { deviceId } = useParams();

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${DEVICE_DETAIL_ENDPOINT}${deviceId}`);
        const data = await response.json();
        setDeviceDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceDetails();
  }, [deviceId, setLoading]);

  return { deviceDetails, loading };
};

export default useFetchDeviceDetails;
