import { TrendingUp, TrendingDown, Receipt, CreditCard, ShoppingCart } from "lucide-react";
import "./dashboard.css";
import { spendingSummary, formatCurrency } from "@/data/mockData";

const cards = [
  {
    label: "Total Spent",
    value: formatCurrency(spendingSummary.totalSpent),
    change: spendingSummary.comparedToPrevious.spentChange,
    icon: CreditCard,
  },
  {
    label: "Transactions",
    value: spendingSummary.transactionCount.toString(),
    change: spendingSummary.comparedToPrevious.transactionChange,
    icon: Receipt,
  },
  {
    label: "Avg Transaction",
    value: formatCurrency(spendingSummary.averageTransaction),
    change: null,
    icon: TrendingUp,
  },
  {
    label: "Top Category",
    value: spendingSummary.topCategory,
    change: null,
    icon: ShoppingCart,
  },
];

const SummaryCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {cards.map((card, i) => (
      <div
        key={card.label}
        className="dashboard-card"
        style={{ animationDelay: `${i * 80}ms` }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">{card.label}</span>
          <card.icon className="h-4 w-4 text-primary" />
        </div>
        <p className="text-2xl font-bold tracking-tight">{card.value}</p>
        {card.change !== null && (
          <div className="flex items-center gap-1 mt-2 text-xs">
            {card.change >= 0 ? (
              <TrendingUp className="h-3 w-3 text-status-success" />
            ) : (
              <TrendingDown className="h-3 w-3 text-status-danger" />
            )}
            <span className={card.change >= 0 ? "text-status-success" : "text-status-danger"}>
              {card.change >= 0 ? "+" : ""}{card.change}%
            </span>
            <span className="text-muted-foreground">vs last period</span>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default SummaryCards;
