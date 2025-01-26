import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee-list',
    pathMatch: 'full',
  },
  {
    path: 'employee-list',
    loadChildren: () =>
      import('./features/employee/employee.module').then(
        (c) => c.EmployeeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
