import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  { path: '', component: AssignmentsComponent },
  // { path: 'home', component: AssignmentsComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignments/add', component: AddAssignmentComponent },
  {
    path: 'assignment/:id/edit',
    canActivate: [AuthGuardGuard],
    component: EditAssignmentComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
