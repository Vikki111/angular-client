import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeeoperation } from '../../components/employeeoperation/employeeoperation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeoperationService {

  private baseUrl = 'http://localhost:8080/employeeOperations';

  constructor(private http: HttpClient) { }

  getEmployeeoperation(id: number): Observable<Employeeoperation> {
    return this.http.get<Employeeoperation>(`${this.baseUrl}/${id}`, {});
  }

  createEmployeeoperation(employeeoperation: Employeeoperation): Observable<Employeeoperation> {
    return this.http.post<Employeeoperation>(`${this.baseUrl}`, employeeoperation);
  }

  updateEmployeeoperation(id: number, employeeoperation: Employeeoperation): Observable<Employeeoperation> {
    return this.http.put<Employeeoperation>(`${this.baseUrl}/${id}`, employeeoperation, {});
  }

  deleteEmployeeoperation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {});
  }

  getEmployeeoperationsList(): Observable<Employeeoperation[]> {
    return this.http.get<Employeeoperation[]>(`${this.baseUrl}`, {});
  }
}
