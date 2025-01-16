const SummaryField = ({ label, value }) => {
  const displayValue =
    value === true
      ? "true"
      : value === false
      ? "false"
      : value !== null && value !== undefined
      ? value.toString()
      : "N/A";

  return (
    <div className="summary-field">
      <span>{label}</span>
      <p>{displayValue}</p>
    </div>
  );
};

const RenderSummaryField = ({ keyName, value }) => {
  if (typeof value === "object" && value !== null && !(value instanceof Date)) {
    return (
      <div key={keyName} className="nested-summary-field">
        {Object.entries(value).map(([nestedKey, nestedValue]) => (
          <SummaryField
            key={nestedKey}
            label={nestedKey}
            value={
              nestedValue instanceof Date
                ? nestedValue.toString()
                : nestedValue !== null && nestedValue !== undefined
                ? nestedValue.toString()
                : "N/A"
            }
          />
        ))}
      </div>
    );
  }

  return (
    <SummaryField
      key={keyName}
      label={keyName}
      value={value !== null && value !== undefined ? value.toString() : "N/A"}
    />
  );
};

export default SummaryField;
export { RenderSummaryField };
