import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  assSelectionne!: Assignment;
  assignments: Assignment[] = [
    { id: 1, nom: 'tp1', date: new Date('01/02/2021'), rendu: true },
    { id: 2, nom: 'tp2', date: new Date('01/02/2021'), rendu: true },
    { id: 3, nom: 'tp3', date: new Date('01/02/2021'), rendu: true },
  ];
  constructor() {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getNewId(): number {
    return Math.random();
  }

  getAssignmentById(id: number): Observable<Assignment> {
    const a: Assignment | undefined = this.assignments.find((x) => x.id === id);
    return of(a!);
  }

  addAssignments(ass: Assignment): Observable<string> {
    this.assignments.push(ass);
    return of('assignment ajouté');
  }

  updateAssignments(ass: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(ass);
    this.assignments[pos] = ass;
    return of('assignment modifié');
  }

  deleteAssignments(assignmentasupprimer: Assignment): Observable<string> {
    console.log(assignmentasupprimer);
    // let pos = this.assignments.indexOf(assignmentasupprimer)
    // this.assignments=this.assignments.slice(pos,1)
    this.assignments = [
      ...this.assignments.filter((ass) => {
        return ass.nom !== assignmentasupprimer.nom;
      }),
    ];
    console.log(this.assignments);
    return of('assignment supprimé');
  }
}
