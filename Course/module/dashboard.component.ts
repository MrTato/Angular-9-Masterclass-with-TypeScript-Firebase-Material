import { multiply, log as mathLog } from './math.util';
import { calculateSalary, generatePayslip, log } from './employee.service';

export default class Dashboard {
    employeeId;

    createDashboard() {
        multiply(10, 20);
        mathLog();
        calculateSalary();
        generatePayslip();
        log();
    }
}

export function logDashboardActivities() {
    console.log("Logged Dashboard Activities!");
}