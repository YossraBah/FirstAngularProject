import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des devoirs';
  assignments: Assignment[] = [];
  assignmentSelectionne: Assignment | undefined;
  constructor(private assignmentServive: AssignmentsService) {}

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentServive.getAssignments().subscribe((assignment) => {
      this.assignments = assignment;
    });
  }

  // assignmentClique(assignment: Assignment) {
  //   this.assignmentSelectionne = assignment;
  //   console.log(this.assignmentSelectionne);
  // }

  // onNouvelassignment(newassignment: Assignment) {
  //   this.assignmentServive.addAssignments(newassignment).subscribe((msg) => {
  //     console.log(msg);
  //   });
  // }
}
