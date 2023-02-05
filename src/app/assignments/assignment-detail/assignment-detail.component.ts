import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  constructor(
    private assignmentService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  assignmentTransmis: Assignment | undefined;
  ngOnInit() {
    this.getAssignment();
  }

  getAssignment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.assignmentService
      .getAssignmentById(Number(id))
      .subscribe((res) => (this.assignmentTransmis = res));
  }

  onAssignmentRendu() {
    this.assignmentTransmis!.rendu = true;
    this.assignmentService
      .updateAssignments(this.assignmentTransmis!)
      .subscribe((msg) => console.log(msg));
    this.assignmentTransmis = undefined;
    this.router.navigate(['']);
  }
  onEdit() {
    this.router.navigate([
      '/assignment/' + this.assignmentTransmis!.id + '/edit',
    ]);
  }
  onDelete() {
    if (this.authService.loggedIn) {
      this.assignmentService
        .deleteAssignments(this.assignmentTransmis!)
        .subscribe((msg) => console.log(msg));
      this.assignmentTransmis = undefined;
      this.router.navigate(['']);
    }
  }
}
