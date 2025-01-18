import { ListTask, Map, PlusCircleDotted } from "react-bootstrap-icons";

export const DEVICE_LIST_ENDPOINT =
  "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices";
export const DEVICE_DETAIL_ENDPOINT =
  "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/";
export const SIDEBAR_ITEMS = [
  {
    name: "Device List",
    route: "/device-list",
    icon: <ListTask size={24} className="sidebar-icon" />,
  },
  {
    name: "Device Map",
    route: "/device-map",
    icon: <Map size={24} className="sidebar-icon" />,
  },
  {
    name: "Device Profiles",
    route: "/device-profiles",
    icon: <PlusCircleDotted size={24} className="sidebar-icon" />,
  },
];
