import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./dashboard.css";
import { monthlyTrends, formatCurrency } from "@/data/mockData";

const TrendsChart = () => (
  <div className="dashboard-card" style={{ animationDelay: "400ms" }}>
    <h2 className="card-title">Monthly Spending Trends</h2>
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={monthlyTrends} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(172, 66%, 50%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(172, 66%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 18%)" />
          <XAxis dataKey="month" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `R${(v / 1000).toFixed(1)}k`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="tooltip-card">
                  <p className="tooltip-title">{label}</p>
                  <p className="tooltip-amount">{formatCurrency(payload[0].value as number)}</p>
                  <p className="tooltip-meta">{payload[0].payload.transactionCount} transactions</p>
                </div>
              );
            }}
          />
          <Area type="monotone" dataKey="totalSpent" stroke="hsl(172, 66%, 50%)" strokeWidth={2} fill="url(#spendGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default TrendsChart;
