import { User, Crown } from "lucide-react";
import { customerProfile, formatCurrency } from "@/data/mockData";
import SummaryCards from "@/components/dashboard/SummaryCards";
import CategoryChart from "@/components/dashboard/CategoryChart";
import TrendsChart from "@/components/dashboard/TrendsChart";
import TransactionsList from "@/components/dashboard/TransactionsList";
import BudgetGoals from "@/components/dashboard/BudgetGoals";
import MonthSelector from "@/components/dashboard/MonthSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" style={{ backgroundColor: '#093E70' }}>
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-10 app-header"  >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between" style={{ backgroundColor: '#fff' }}>
          <div className="flex items-center gap-3">
            <div className="header-logo" aria-hidden>
              {/* Capitec-like logo: two overlapping circles + bar (inline SVG) */}
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="40" height="28" rx="4" fill="var(--brand-dark)" />
                <circle cx="12" cy="14" r="7" fill="var(--brand-primary)" />
                <circle cx="24" cy="14" r="7" fill="var(--brand-accent)" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: 'var(--brand-accent)' }}>Capitec SpendSight</h1>
              <p className="text-xs text-muted-foreground">Financial Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3" style={{ color: 'var(--brand-accent)' }}>
            <MonthSelector />
            <div className="flex items-center gap-2 pl-3 border-l border-border" >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{customerProfile.name}</p>
                <div className="flex items-center gap-1 justify-end">
                  <Crown className="h-3 w-3 text-status-warning" />
                  <span className="text-xs text-muted-foreground capitalize">{customerProfile.accountType}</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6" style={{ backgroundColor: '#093E70' }}>
        {/* Total banner */}
        <div className="glass-card rounded-xl bg-white p-5 glow-primary animate-fade-in lifetime-card" style={{ backgroundColor: '#ffff' }}>
          <p className="text-sm text-muted-foreground mb-1" >Lifetime Spending</p>
          <p className="text-3xl font-bold gradient-text" style={{ color: 'var(--brand-accent)' }}>{formatCurrency(customerProfile.totalSpent)}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Member since {new Date(customerProfile.joinDate).toLocaleDateString("en-ZA", { month: "long", year: "numeric" })}
          </p>
        </div>

        <SummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CategoryChart />
          <TrendsChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsList />
          </div>
          <BudgetGoals />
        </div>
      </main>
    </div>
  );
};

export default Index;
