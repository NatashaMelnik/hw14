import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IPerson } from '../../services/person';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  people!: IPerson[];
  person: IPerson = {};
  signedIn = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.refreshPeople();
  }

  refreshPeople(): void {
    this.apiService
      .getPeople()
      .subscribe((data) => {
        this.people = data;
      });
  }

  addPerson(): void {
    this.apiService.addPerson(this.person).subscribe((data) => {
      this.refreshPeople();
    });
    this.signedIn = true;
  }
}
