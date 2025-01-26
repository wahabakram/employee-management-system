import { Component, Inject, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../interfaces/employee.interface';
import { JoinDateHeaderComponent } from './datepicker-header/join-date-header/join-date-header.component';
import { DatepickerHeaderService } from './datepicker-header/datepicker-header.service';
import { EndDateHeaderComponent } from './datepicker-header/end-date-header/end-date-header.component';
import { v4 as uuidv4 } from 'uuid';
import { storage } from 'src/app/shared/utils/storage.utils';
import { ToastrService } from 'ngx-toastr';
import localforage from 'localforage';

interface Role {
  id: number;
  name: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  private _fb = inject(FormBuilder);
  private _datepickerHeaderService = inject(DatepickerHeaderService);
  private _toastr = inject(ToastrService);

  public dialogRef = inject(MatDialogRef<EmployeeFormComponent>);

  title = 'Add Employee Details';
  roles: Array<Role> = [
    {
      id: 1,
      name: 'Product Designer',
    },
    {
      id: 2,
      name: 'Flutter Developer',
    },
    {
      id: 3,
      name: 'QA Tester',
    },
    {
      id: 4,
      name: 'Product Owner',
    },
    {
      id: 4,
      name: 'Full-stack Developer',
    },
  ];

  form!: FormGroup;
  date = signal<{ [key: string]: any }>({});
  joinDateHeaderComponent = JoinDateHeaderComponent;
  endDateHeaderComponent = EndDateHeaderComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee) {
    this.form = this._fb.group({
      name: [employee?.name ?? null, Validators.required],
      role: [employee?.role ?? null, Validators.required],
      joinDate: [employee?.joinDate ?? null, Validators.required],
      endDate: [employee?.endDate ?? null],
    });

    this._datepickerHeaderService.getDate().subscribe((res) => {
      this.date.set({ [res.control]: res.value });
    });
  }

  get joinDateControl(): FormControl {
    return this.form.get('joinDate') as FormControl;
  }

  setDate(control: 'joinDate' | 'endDate') {
    this.form.get(control)?.setValue(this.date()[control]);
  }

  saveEmployee() {
    if (this.form.valid) {
      const uuid = this.employee ? this.employee?.id : uuidv4();
      storage.setItem(
        uuid,
        { id: uuid, ...this.form.value },
        { table: 'employee' }
      );
      this.dialogRef.close(true);
      this._toastr.success('Employee added successfully.');
    } else {
      this._toastr.error('Please fill required fields.');
    }
  }
}
