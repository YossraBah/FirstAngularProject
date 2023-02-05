import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { retry } from 'rxjs';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent {
  constructor(
    private router: Router,
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute
  ) {}
  assignment!: Assignment;
  ngOnInit() {
    this.getAssignment();
  }
  getAssignment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.assignmentsService
      .getAssignmentById(Number(id))
      .subscribe((res) => (this.assignment = res));
  }
  onUpdate() {
    // this.nouvelAssignment.emit(newAss)
    this.assignmentsService
      .updateAssignments(this.assignment)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(['']);
  }
}
