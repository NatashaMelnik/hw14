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
  signedIn: Boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService
      .getPeople()
      .subscribe((data) => {
        this.people = data;
      });
  }

  addPerson() {
    this.apiService.addPerson(this.person).subscribe((data) => {
      this.refreshPeople();
    });
    this.signedIn = true;
  }
}
