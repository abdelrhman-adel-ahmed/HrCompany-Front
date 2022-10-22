import { EmployeeLoginDTO } from "./EmployeeLoginDTO";

export class EmployeeDTO {
    public employeeId: number;
    public employeeName: string;
    public employeeAddress: string;
    public employeeBirthDate: string;
    public employeeEmailAddress: string;
    public employeeMobile:string;
    public managerId: number;
    public isManager: boolean;
    public manager:EmployeeDTO;
    public employeesLogins : EmployeeLoginDTO[];
}
