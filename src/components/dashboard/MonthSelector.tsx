import { useState } from "react";
import { monthlyTrends, formatCurrency, categories } from "@/data/mockData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import "./dashboard.css";
import { TrendingUp, TrendingDown, Receipt, ShoppingCart } from "lucide-react";

const monthData: Record<string, { topCategory: string; avgTransaction: number; categoryBreakdown: { name: string; amount: number; percentage: number }[] }> = {
  Jan: { topCategory: "Groceries", avgTransaction: 92.63, categoryBreakdown: [{ name: "Groceries", amount: 1120, percentage: 28.8 }, { name: "Entertainment", amount: 780, percentage: 20.1 }, { name: "Transportation", amount: 650, percentage: 16.7 }, { name: "Dining", amount: 540, percentage: 13.9 }, { name: "Utilities", amount: 430, percentage: 11.1 }, { name: "Shopping", amount: 370, percentage: 9.5 }] },
  Feb: { topCategory: "Entertainment", avgTransaction: 109.23, categoryBreakdown: [{ name: "Entertainment", amount: 1050, percentage: 25.3 }, { name: "Groceries", amount: 980, percentage: 23.6 }, { name: "Shopping", amount: 720, percentage: 17.3 }, { name: "Dining", amount: 580, percentage: 14.0 }, { name: "Transportation", amount: 480, percentage: 11.6 }, { name: "Utilities", amount: 340, percentage: 8.2 }] },
  Mar: { topCategory: "Groceries", avgTransaction: 83.35, categoryBreakdown: [{ name: "Groceries", amount: 1180, percentage: 31.5 }, { name: "Transportation", amount: 720, percentage: 19.2 }, { name: "Entertainment", amount: 610, percentage: 16.3 }, { name: "Dining", amount: 490, percentage: 13.1 }, { name: "Utilities", amount: 420, percentage: 11.2 }, { name: "Shopping", amount: 330, percentage: 8.8 }] },
  Apr: { topCategory: "Shopping", avgTransaction: 107.70, categoryBreakdown: [{ name: "Shopping", amount: 1100, percentage: 26.2 }, { name: "Groceries", amount: 950, percentage: 22.6 }, { name: "Entertainment", amount: 780, percentage: 18.6 }, { name: "Dining", amount: 620, percentage: 14.8 }, { name: "Transportation", amount: 450, percentage: 10.7 }, { name: "Utilities", amount: 300, percentage: 7.1 }] },
  May: { topCategory: "Groceries", avgTransaction: 90.46, categoryBreakdown: [{ name: "Groceries", amount: 1200, percentage: 30.1 }, { name: "Entertainment", amount: 820, percentage: 20.6 }, { name: "Transportation", amount: 640, percentage: 16.1 }, { name: "Dining", amount: 510, percentage: 12.8 }, { name: "Utilities", amount: 460, percentage: 11.6 }, { name: "Shopping", amount: 350, percentage: 8.8 }] },
  Jun: { topCategory: "Groceries", avgTransaction: 90.44, categoryBreakdown: [{ name: "Groceries", amount: 1250, percentage: 29.4 }, { name: "Entertainment", amount: 890, percentage: 20.9 }, { name: "Transportation", amount: 680, percentage: 16.0 }, { name: "Dining", amount: 520, percentage: 12.2 }, { name: "Utilities", amount: 459, percentage: 10.8 }, { name: "Shopping", amount: 451, percentage: 10.6 }] },
};

const MonthSelector = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const trend = selectedMonth ? monthlyTrends.find((t) => t.month === selectedMonth) : null;
  const details = selectedMonth ? monthData[selectedMonth] : null;
  const monthIndex = selectedMonth ? monthlyTrends.findIndex((t) => t.month === selectedMonth) : -1;
  const prevTrend = monthIndex > 0 ? monthlyTrends[monthIndex - 1] : null;
  const spentChange = prevTrend && trend ? ((trend.totalSpent - prevTrend.totalSpent) / prevTrend.totalSpent) * 100 : null;

  return (
    <>
      <div className="month-selector-tabs">
        {monthlyTrends.map((m) => (
          <button
            key={m.month}
            onClick={() => setSelectedMonth(m.month)}
            className={`month-tab ${selectedMonth === m.month ? "month-tab--active" : ""}`}
          >
            {m.month}
          </button>
        ))}
      </div>

      <Dialog open={!!selectedMonth} onOpenChange={(open) => !open && setSelectedMonth(null)}>
          <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="dialog-title">{selectedMonth} 2024 Analytics</DialogTitle>
          </DialogHeader>

          {trend && details && (
            <div className="stack-vertical">
              {/* Summary stats */}
              <div className="grid-two">
                <div className="dashboard-card dashboard-card--sm">
                  <p className="stat-label">Total Spent</p>
                  <p className="stat-value">{formatCurrency(trend.totalSpent)}</p>
                  {spentChange !== null && (
                    <div className={`stat-change ${spentChange >= 0 ? "status-danger" : "status-success"}`}>
                      {spentChange >= 0 ? <TrendingUp className="icon-sm" /> : <TrendingDown className="icon-sm" />}
                      <span>{Math.abs(spentChange).toFixed(1)}% vs prev</span>
                    </div>
                  )}
                </div>
                <div className="dashboard-card dashboard-card--sm">
                  <p className="stat-label">Transactions</p>
                  <div className="card-row">
                    <Receipt className="icon-md" />
                    <p className="stat-value" style={{ margin: 0 }}>{trend.transactionCount}</p>
                  </div>
                  <p className="stat-label" style={{ marginTop: '0.25rem' }}>Avg {formatCurrency(details.avgTransaction)}</p>
                </div>
              </div>

              {/* Top category */}
              <div className="dashboard-card dashboard-card--sm card-row">
                <div className="icon-circle" style={{ backgroundColor: 'rgba(14,165,161,0.12)' }}>
                  <ShoppingCart className="icon-sm" />
                </div>
                <div>
                  <p className="stat-label">Top Category</p>
                  <p className="stat-value" style={{ fontSize: '0.95rem', fontWeight: 600 }}>{details.topCategory}</p>
                </div>
              </div>

              {/* Category breakdown */}
              <div>
                <p className="stat-value" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Category Breakdown</p>
                <div className="stack-vertical">
                  {details.categoryBreakdown.map((cat) => (
                    <div key={cat.name} className="breakdown-row">
                      <span className="breakdown-name">{cat.name}</span>
                      <div className="progress-outer">
                        <div className="progress-inner" style={{ width: `${cat.percentage}%` }} />
                      </div>
                      <span className="breakdown-amount">{formatCurrency(cat.amount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MonthSelector;
