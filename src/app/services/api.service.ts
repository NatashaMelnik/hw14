import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from './person';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<IPerson[]> {
    console.log('getPeople ' + this.baseURL + 'people');
    return this.http.get<IPerson[]>(this.baseURL + 'people');
  }

  addPerson(person: IPerson): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(
      this.baseURL + 'people', 
      { 
        body: JSON.stringify(person)
      }, 
      { 
        headers: headers 
      }
    );
  }
}
