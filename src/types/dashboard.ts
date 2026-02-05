export interface StatCardData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

export interface DashboardMetrics {
  totalUsers: number;
  activeProjects: number;
  revenue: number;
  completionRate: number;
}

export interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}
