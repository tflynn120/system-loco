import Table from "../components/Table";
import { Spinner } from "../components/Spinner";
import useFetchDevices from "../hooks/useFetchDevices";
import DeviceListInputs from "./DeviceListInputs";
export default function DeviceList() {
  const { devices, loading } = useFetchDevices();
  // Given more time, this layout component would need to be set up to pass props between the deviceListInputs and table to correctly filter the data
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <DeviceListInputs />
          <Table devices={devices} />
        </>
      )}
    </>
  );
}
