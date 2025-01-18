import { DEVICE_DETAIL_ENDPOINT, DEVICE_LIST_ENDPOINT } from "../constants";

export const fetchDevices = async () => {
  try {
    const response = await fetch(DEVICE_LIST_ENDPOINT);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDeviceDetails = async (deviceId) => {
  try {
    const response = await fetch(`${DEVICE_DETAIL_ENDPOINT}${deviceId}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

//could make this into a single generic function, don't need two
