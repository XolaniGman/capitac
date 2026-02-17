import React, { useMemo, useState } from "react";
import "./dashboard.css";
import { format } from "date-fns";
import { goals, formatCurrency, transactions, categories } from "@/data/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const BudgetGoals: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);

  const selectedGoal = useMemo(() => goals.find((g) => g.id === selectedGoalId) ?? null, [selectedGoalId]);

  const recentTxnsForSelected = useMemo(() => {
    if (!selectedGoal) return [];
    return transactions.filter((t) => t.category === selectedGoal.category).slice(0, 6);
  }, [selectedGoal]);

  const categoryMeta = (categoryName: string) => categories.find((c) => c.name === categoryName) ?? null;

  return (
    <div className="dashboard-card" style={{ animationDelay: "560ms" }}>
      <h2 className="card-title">Budget Goals</h2>
      <div className="goals-list">
        {goals.map((goal) => {
          const isWarning = goal.status === "warning";
          return (
            <div
              key={goal.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelectedGoalId(goal.id);
                setOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedGoalId(goal.id);
                  setOpen(true);
                }
              }}
              className="goal-row"
            >
              <div className="goal-header">
                <span className="goal-category">{goal.category}</span>
                <span className="goal-amount">{formatCurrency(goal.currentSpent)} / {formatCurrency(goal.monthlyBudget)}</span>
              </div>
              <div className="progress-outer">
                <div
                  className="progress-inner"
                  style={{
                    width: `${Math.min(goal.percentageUsed, 100)}%`,
                    backgroundColor: isWarning ? "hsl(var(--status-warning))" : "hsl(var(--primary))",
                  }}
                />
              </div>
              <div className="goal-meta">
                <span className={`goal-percentage ${isWarning ? "warning" : ""}`}>{goal.percentageUsed.toFixed(0)}% used</span>
                <span className="goal-days">{goal.daysRemaining} days left</span>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
          <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedGoal ? selectedGoal.category : "Category Details"}</DialogTitle>
            <DialogDescription>
              {selectedGoal && (
                <div className="dialog-description">
                  <div className="dialog-stats">
                    <div className="dialog-stat-block">
                      <div className="stat-label">Spent</div>
                      <div className="stat-value font-mono">{formatCurrency(selectedGoal.currentSpent)}</div>
                    </div>
                    <div className="dialog-stat-block">
                      <div className="stat-label">Budget</div>
                      <div className="stat-value font-mono">{formatCurrency(selectedGoal.monthlyBudget)}</div>
                    </div>
                    <div className="dialog-stat-block">
                      <div className="stat-label">Remaining</div>
                      <div className="stat-value font-mono">{formatCurrency(Math.max(selectedGoal.monthlyBudget - selectedGoal.currentSpent, 0))}</div>
                    </div>
                  </div>
                  <div className="dialog-progress-outer">
                    <div
                      className="dialog-progress-inner"
                      style={{ width: `${Math.min(selectedGoal.percentageUsed, 100)}%`, backgroundColor: selectedGoal.status === "warning" ? "hsl(var(--status-warning))" : "hsl(var(--primary))" }}
                    />
                  </div>
                  <div className="goal-meta">
                    <span className="goal-percentage">{selectedGoal.percentageUsed.toFixed(0)}% used</span>
                    <span className="goal-days">{selectedGoal.daysRemaining} days left</span>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedGoal && (
            <div className="mt-4 space-y-3">
              <div className="text-sm font-semibold">Recent Transactions</div>
              <div className="space-y-2 max-h-56 overflow-auto">
                {recentTxnsForSelected.length === 0 && <div className="text-xs text-muted-foreground">No transactions for this category.</div>}
                {recentTxnsForSelected.map((txn) => (
                  <div key={txn.id} className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${txn.color}20` }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: txn.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{txn.merchant}</div>
                      <div className="text-xs text-muted-foreground">{format(new Date(txn.date), "dd MMM yyyy")} · {txn.paymentMethod}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-mono font-medium">-{formatCurrency(txn.amount)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-sm font-semibold">Category Summary</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {(() => {
                    const meta = selectedGoal ? categoryMeta(selectedGoal.category) : null;
                    if (!meta) return <div>No further meta available.</div>;
                    return (
                      <div className="flex items-center justify-between">
                        <div>{meta.transactionCount} transactions</div>
                        <div>{meta.percentage.toFixed(0)}% of spending</div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          <DialogClose className="sr-only">Close</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BudgetGoals;
