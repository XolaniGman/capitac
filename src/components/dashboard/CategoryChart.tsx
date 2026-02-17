import { useState } from "react";
import "./dashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { categories, formatCurrency } from "@/data/mockData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const totalAmount = categories.reduce((sum, c) => sum + c.amount, 0);

const CategoryChart = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard-card" style={{ animationDelay: "320ms" }}>
      <div className="card-header">
        <h2 className="card-title" title="Spending by Category">Spending by Category</h2>
        <Button variant="ghost" size="sm" className="view-button" onClick={() => setOpen(true)}>
          <Eye className="icon-md" />
          View
        </Button>
      </div>
      <div className="category-chart-inner">
        <div className="pie-box" style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categories} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="amount" stroke="none">
                {categories.map((cat, i) => (
                  <Cell key={i} fill={cat.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="tooltip-card">
                      <p className="tooltip-title">{d.name}</p>
                      <p className="tooltip-meta">{formatCurrency(d.amount)} · {d.percentage}%</p>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="category-list">
          {categories.map((cat) => (
            <div key={cat.name} className="legend-row">
              <div className="legend-dot" style={{ backgroundColor: cat.color }} />
              <div className="legend-content">
                <div className="legend-header">
                  <span className="legend-name">{cat.name}</span>
                  <span className="legend-amount">{formatCurrency(cat.amount)}</span>
                </div>
                <div className="legend-progress-outer">
                  <div className="legend-progress-inner" style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="dialog-large w-full max-w-5xl">
          <DialogHeader>
            <DialogTitle>Category Breakdown</DialogTitle>
            <p className="text-sm text-muted-foreground">Total spending: {formatCurrency(totalAmount)}</p>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6  mt-2">
            <div className="w-64 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categories} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="amount" stroke="none">
                    {categories.map((cat, i) => (
                      <Cell key={i} fill={cat.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div className="tooltip-card">
                          <p className="tooltip-title">{d.name}</p>
                          <p className="tooltip-meta">{formatCurrency(d.amount)} · {d.percentage}%</p>
                        </div>
                      );
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="dialog-category-list">
              {categories.map((cat) => (
                <div key={cat.name} className="category-card" style={{ border: '1px solid var(--brand-primary)' }}>
                  <div className="category-card-header">
                    <div className="card-row">
                      <div className="legend-dot" style={{ width: '0.875rem', height: '0.875rem', backgroundColor: cat.color }} />
                      <span className="category-card-name">{cat.name}</span>
                    </div>
                    <span className="category-card-txns">{cat.transactionCount} txns</span>
                  </div>
                  <div className="category-card-stats">
                    <span className="category-card-amount">{formatCurrency(cat.amount)}</span>
                    <span className="category-card-percent" style={{ color: cat.color }}>{cat.percentage}%</span>
                  </div>
                  <div className="category-progress">
                    <div className="category-progress-inner" style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryChart;
