import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinDateHeaderComponent } from './employee-form/datepicker-header/join-date-header/join-date-header.component';
import { EndDateHeaderComponent } from './employee-form/datepicker-header/end-date-header/end-date-header.component';
import { DatepickerHeaderService } from './employee-form/datepicker-header/datepicker-header.service';
import { CustomDateAdapter } from 'src/app/shared/adapters';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeListItemComponent,
    JoinDateHeaderComponent,
    EndDateHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    EmployeeRoutingModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    DatepickerHeaderService,
  ],
})
export class EmployeeModule {}
