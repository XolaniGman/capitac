export const customerProfile = {
  customerId: "12345",
  name: "John Doe",
  email: "john.doe@email.com",
  joinDate: "2023-01-15",
  accountType: "premium" as const,
  totalSpent: 15420.50,
  currency: "ZAR",
};

export const spendingSummary = {
  period: "30d" as const,
  totalSpent: 4250.75,
  transactionCount: 47,
  averageTransaction: 90.44,
  topCategory: "Groceries",
  comparedToPrevious: {
    spentChange: 12.5,
    transactionChange: -3.2,
  },
};

export const categories = [
  { name: "Groceries", amount: 1250.30, percentage: 29.4, transactionCount: 15, color: "hsl(var(--category-groceries))", icon: "shopping-cart" as const },
  { name: "Entertainment", amount: 890.20, percentage: 20.9, transactionCount: 8, color: "hsl(var(--category-entertainment))", icon: "film" as const },
  { name: "Transportation", amount: 680.45, percentage: 16.0, transactionCount: 12, color: "hsl(var(--category-transport))", icon: "car" as const },
  { name: "Dining", amount: 520.30, percentage: 12.2, transactionCount: 9, color: "hsl(var(--category-dining))", icon: "utensils" as const },
  { name: "Shopping", amount: 450.80, percentage: 10.6, transactionCount: 6, color: "hsl(var(--category-shopping))", icon: "shopping-bag" as const },
  { name: "Utilities", amount: 458.70, percentage: 10.8, transactionCount: 3, color: "hsl(var(--category-utilities))", icon: "zap" as const },
];

export const monthlyTrends = [
  { month: "Jan", totalSpent: 3890.25, transactionCount: 42 },
  { month: "Feb", totalSpent: 4150.80, transactionCount: 38 },
  { month: "Mar", totalSpent: 3750.60, transactionCount: 45 },
  { month: "Apr", totalSpent: 4200.45, transactionCount: 39 },
  { month: "May", totalSpent: 3980.30, transactionCount: 44 },
  { month: "Jun", totalSpent: 4250.75, transactionCount: 47 },
];

export const transactions = [
  { id: "txn_1", date: "2024-09-16T14:30:00Z", merchant: "Pick n Pay", category: "Groceries", amount: 245.80, description: "Weekly groceries", paymentMethod: "Credit Card", color: "hsl(var(--category-groceries))" },
  { id: "txn_2", date: "2024-09-15T10:15:00Z", merchant: "Netflix", category: "Entertainment", amount: 199.00, description: "Monthly subscription", paymentMethod: "Debit Order", color: "hsl(var(--category-entertainment))" },
  { id: "txn_3", date: "2024-09-14T08:45:00Z", merchant: "Uber", category: "Transportation", amount: 85.50, description: "Airport ride", paymentMethod: "Credit Card", color: "hsl(var(--category-transport))" },
  { id: "txn_4", date: "2024-09-13T19:20:00Z", merchant: "Woolworths", category: "Groceries", amount: 312.40, description: "Grocery shopping", paymentMethod: "Credit Card", color: "hsl(var(--category-groceries))" },
  { id: "txn_5", date: "2024-09-12T12:00:00Z", merchant: "Nando's", category: "Dining", amount: 156.00, description: "Lunch with friends", paymentMethod: "Credit Card", color: "hsl(var(--category-dining))" },
  { id: "txn_6", date: "2024-09-11T16:30:00Z", merchant: "Eskom", category: "Utilities", amount: 458.70, description: "Electricity bill", paymentMethod: "Debit Order", color: "hsl(var(--category-utilities))" },
  { id: "txn_7", date: "2024-09-10T09:00:00Z", merchant: "Zara", category: "Shopping", amount: 899.00, description: "New jacket", paymentMethod: "Credit Card", color: "hsl(var(--category-shopping))" },
  { id: "txn_8", date: "2024-09-09T20:15:00Z", merchant: "Spotify", category: "Entertainment", amount: 79.99, description: "Premium subscription", paymentMethod: "Debit Order", color: "hsl(var(--category-entertainment))" },
];

export const goals = [
  { id: "goal_001", category: "Entertainment", monthlyBudget: 1000.00, currentSpent: 650.30, percentageUsed: 65.03, daysRemaining: 12, status: "on_track" as const },
  { id: "goal_002", category: "Groceries", monthlyBudget: 1500.00, currentSpent: 1450.80, percentageUsed: 96.72, daysRemaining: 12, status: "warning" as const },
  { id: "goal_003", category: "Dining", monthlyBudget: 800.00, currentSpent: 520.30, percentageUsed: 65.04, daysRemaining: 12, status: "on_track" as const },
  { id: "goal_004", category: "Transportation", monthlyBudget: 700.00, currentSpent: 680.45, percentageUsed: 97.21, daysRemaining: 12, status: "warning" as const },
];

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(amount);
