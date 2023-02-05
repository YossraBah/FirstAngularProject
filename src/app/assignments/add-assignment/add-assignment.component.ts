import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent {
  // @Output() nouvelAssignment = new EventEmitter<Assignment>();
  constructor(
    private router: Router,
    private assignmentsService: AssignmentsService
  ) {}
  nomDevoir: string = '';
  dateRendu: Date | undefined;
  onSubmit() {
    const newAss = new Assignment();
    newAss.id = this.assignmentsService.getNewId();
    newAss.nom = this.nomDevoir;
    newAss.date = this.dateRendu;
    newAss.rendu = false;
    // this.nouvelAssignment.emit(newAss)
    this.assignmentsService.addAssignments(newAss).subscribe((res) => {
      console.log(res + 'added successfully');
    });
    this.router.navigate(['']);
  }
}
