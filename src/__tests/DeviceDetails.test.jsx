/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DeviceDetails from "../pages/DeviceDetails";

jest.mock("../hooks/useFetchDeviceDetails", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    deviceDetails: {
      id: "123",
      name: "Test Device",
      statusIndicators: {
        battery: "normal",
        moving: true,
      },
      model: {
        name: "Model X",
        family: "Family Y",
        product: "Product Z",
      },
      owner: {
        id: "owner123",
        name: "Owner Name",
      },
      lastKnownLocation: {
        lat: 12.34,
        lon: 56.78,
      },
      lastReportTime: "2023-01-01T00:00:00Z",
    },
    loading: false,
    error: null,
  })),
}));

// Mock the fetch API
window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "123",
        name: "Test Device",
        statusIndicators: {
          battery: "normal",
          moving: true,
        },
        model: {
          name: "Model X",
          family: "Family Y",
          product: "Product Z",
        },
        owner: {
          id: "owner123",
          name: "Owner Name",
        },
        lastKnownLocation: {
          lat: 12.34,
          lon: 56.78,
        },
        lastReportTime: "2023-01-01T00:00:00Z",
      }),
  })
);

describe("DeviceDetails", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders device details correctly", async () => {
    render(
      <Router>
        <DeviceDetails />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText("Summary")).toBeInTheDocument();
      expect(screen.getByText("Id")).toBeInTheDocument();
      expect(screen.getByText("123")).toBeInTheDocument();
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Test Device")).toBeInTheDocument();
      expect(screen.getByText("Next Report Time")).toBeInTheDocument();
      expect(
        screen.getByText(new Date("2023-01-01T00:00:00Z").toString())
      ).toBeInTheDocument();
    });
  });
});
