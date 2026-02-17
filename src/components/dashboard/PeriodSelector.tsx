import { useState } from "react";
import "./dashboard.css";

const periods = [
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
  { label: "90D", value: "90d" },
  { label: "1Y", value: "1y" },
];

const PeriodSelector = () => {
  const [active, setActive] = useState("30d");

  return (
    <div className="period-selector">
      {periods.map((p) => (
        <button
          key={p.value}
          onClick={() => setActive(p.value)}
          className={`period-btn ${active === p.value ? "period-btn--active" : ""}`}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
};

export default PeriodSelector;
