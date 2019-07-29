import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employees = [];
  private _url: string = "assets/data/employees.json";
  constructor(private http: HttpClient) { }

getEmployees() : Observable<IEmployee[]> {
  return this.http.get<IEmployee[]>(this._url).pipe(
    catchError(err => {
      if (err.status == 401) return EMPTY;
      else return throwError(err);
    })
  );
}

}