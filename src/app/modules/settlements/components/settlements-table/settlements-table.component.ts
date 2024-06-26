import {Component, OnInit} from '@angular/core';
import {Settlement} from "../../../core/models/project.model";
import {SettlementService} from "../../../core/services/settlement.service";

// const settlements: Settlement[] = [
//   {
//     uuid: "123e4567-e89b-12d3-a456-426614174000",
//     status: "Pending",
//     settlementType: "Invoice",
//     projectId: "Project1",
//     workId: "Work1",
//     amountOfMoney: "1500.00",
//     description: "Invoice for Work1 in Project1",
//     employeeId: "emp1",
//     nameAndLastname: "John Doe",
//     date: "2023-06-01T10:00:00Z"
//   },
//   {
//     uuid: "123e4567-e89b-12d3-a456-426614174001",
//     status: "Completed",
//     settlementType: "Expense",
//     projectId: "Project2",
//     workId: "Work2",
//     amountOfMoney: "250.75",
//     description: "Expense for Work2 in Project2",
//     employeeId: "emp2",
//     nameAndLastname: "Jane Smith",
//     date: "2023-06-10T14:30:00Z"
//   },
//   {
//     uuid: "123e4567-e89b-12d3-a456-426614174002",
//     status: "Rejected",
//     settlementType: "Salary",
//     projectId: "Project3",
//     workId: "Work3",
//     amountOfMoney: "3200.50",
//     description: "Salary for Work3 in Project3",
//     employeeId: "emp3",
//     nameAndLastname: "Emily Johnson",
//     date: "2023-06-15T09:15:00Z"
//   },
//   {
//     uuid: "123e4567-e89b-12d3-a456-426614174003",
//     status: "Completed",
//     settlementType: "Invoice",
//     projectId: "Project1",
//     workId: "Work2",
//     amountOfMoney: "800.00",
//     description: "Invoice for Work2 in Project1",
//     employeeId: "emp2",
//     nameAndLastname: "Jane Smith",
//     date: "2023-06-20T11:45:00Z"
//   },
//   {
//     uuid: "123e4567-e89b-12d3-a456-426614174004",
//     status: "Pending",
//     settlementType: "Expense",
//     projectId: "Project2",
//     workId: "Work3",
//     amountOfMoney: "450.25",
//     description: "Expense for Work3 in Project2",
//     employeeId: "emp1",
//     nameAndLastname: "John Doe",
//     date: "2023-06-25T13:00:00Z"
//   }
// ];


@Component({
  selector: 'app-settlements-table',
  templateUrl: './settlements-table.component.html',
  styleUrls: ['./settlements-table.component.css']
})
export class SettlementsTableComponent implements OnInit{
  displayedColumns: string[] = ['uuid', 'status', 'settlementType', 'projectId', 'workId', 'amountOfMoney', 'description', 'employeeId', 'nameAndLastname', 'date'];


  dataSource : Settlement[] = [];

  constructor(private settlementService: SettlementService) {}

  ngOnInit(): void {
    this.settlementService.getSettlementsByEmployeeUuid().subscribe(data => {
      this.dataSource = data;
    });
  }





}
