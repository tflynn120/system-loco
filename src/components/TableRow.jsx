import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function TableRow({ device }) {
  const renderCell = (value) => {
    if (typeof value === "object" && value !== null) {
      return Object.values(value).map((nestedValue, index) => (
        <td key={index}>{nestedValue !== undefined ? nestedValue : "N/A"}</td>
      ));
    }
    return <td>{value !== null && value !== undefined ? value : "N/A"}</td>;
  };

  return (
    <tr>
      {Object.values(device).map((value) => (
        <React.Fragment key={value}>{renderCell(value)}</React.Fragment>
      ))}

      <td>
        <NavLink to={`/device-list/${device.id}`}>
          <Button className="button-view-details" label="View details" />
        </NavLink>
      </td>
    </tr>
  );
}
