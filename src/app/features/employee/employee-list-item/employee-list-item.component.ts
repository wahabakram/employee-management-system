import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
})
export class EmployeeListItemComponent {
  @Input({ required: true }) item!: Employee;
  @Output() onedit = new EventEmitter<Employee>();
  @Output() ondelete = new EventEmitter<Employee>();
}
