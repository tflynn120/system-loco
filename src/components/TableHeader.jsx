export default function TableHeader() {
  const headers = [
    "Device ID",
    "Name",
    "Model Name",
    "Model Family",
    "Model Product",
    "Last Report Time",
    "Next Report Time",
    "View Details",
  ];
  return (
    <thead className="table-header">
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}
