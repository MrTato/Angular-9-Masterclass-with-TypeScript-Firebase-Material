// Since the Dashboard module present in the dashboard.component file is a default export,
// I don't have to use the same name for the class Dashboard.
// I can give it another name, like DashboardComponent
import DashboardComponent, { logDashboardActivities } from './dashboard.component';

const dashboard: DashboardComponent = new DashboardComponent();
dashboard.createDashboard();