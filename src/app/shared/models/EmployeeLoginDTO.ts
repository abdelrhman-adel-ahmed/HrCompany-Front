import { EmployeeDTO } from "./EmployeeDTO";

export class EmployeeLoginDTO  {
  public id : number;
  public employee : EmployeeDTO;
  public signInTime : string;
  public signOutTime: string;
  public totalHours : number;
}
