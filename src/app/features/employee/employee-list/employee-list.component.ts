import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { storage } from 'src/app/shared/utils/storage.utils';

interface EmployeeList {
  current: WritableSignal<Array<Employee>>;
  previous: WritableSignal<Array<Employee>>;
  total: WritableSignal<number>;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  private dialog = inject(MatDialog);

  config: MatDialogConfig = {
    panelClass: [
      '!min-w-[50vw]',
      '!max-w-[98vw]',
      'lg:!max-w-[50vw]',
      'md:!max-w-[70vw]',
    ],
    disableClose: true,
  };
  employees: EmployeeList = {
    current: signal([]),
    previous: signal([]),
    total: signal(0),
  };

  constructor() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    storage.getItems({ table: 'employee' }).then((res: Array<Employee>) => {
      const previousEmployees = res.filter((employee) => employee.endDate);
      const currentEmployees = res.filter((employee) => !employee.endDate);
      this.employees.previous.set(previousEmployees);
      this.employees.current.set(currentEmployees);
      this.employees.total.set(res.length);
    });
  }

  addEditEmployee(employee: Employee | null = null) {
    return this.dialog
      .open(EmployeeFormComponent, {
        ...this.config,
        data: employee,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.getAllEmployee();
        }
      });
  }

  deleteEmployee(employee: Employee) {
    storage.removeItem(employee.id, { table: 'employee' });
    this.getAllEmployee();
  }
}
