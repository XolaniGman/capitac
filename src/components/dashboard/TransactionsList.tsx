import { format } from "date-fns";
import { transactions, formatCurrency } from "@/data/mockData";
import "./dashboard.css";

const TransactionsList = () => (
  <div className="dashboard-card" style={{ animationDelay: "480ms" }}>
    <h2 className="card-title">Recent Transactions</h2>
    <div className="transactions-list">
      {transactions.map((txn) => (
        <div key={txn.id} className="txn-row">
          <div className="txn-avatar" style={{ backgroundColor: `${txn.color}20` }}>
            <div className="txn-dot" style={{ backgroundColor: txn.color }} />
          </div>
          <div className="txn-content">
            <p className="txn-merchant">{txn.merchant}</p>
            <p className="txn-meta">{txn.category} · {txn.paymentMethod}</p>
          </div>
          <div className="txn-right">
            <p className="txn-amount">-{formatCurrency(txn.amount)}</p>
            <p className="txn-date">{format(new Date(txn.date), "dd MMM")}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionsList;
