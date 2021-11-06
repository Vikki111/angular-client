import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Typeoperation } from '../../components/typeoperation/typeoperation';

@Injectable({
  providedIn: 'root'
})
export class TypeoperationService {

  private baseUrl = 'http://localhost:8080/typeOperations';

  constructor(private http: HttpClient) { }

  getTypeoperation(id: number): Observable<Typeoperation> {
    return this.http.get<Typeoperation>(`${this.baseUrl}/${id}`, {});
  }

  createTypeoperation(typeoperation: Typeoperation): Observable<Typeoperation> {
    return this.http.post<Typeoperation>(`${this.baseUrl}`, typeoperation);
  }

  updateTypeoperation(id: number, typeoperation: Typeoperation): Observable<Typeoperation> {
    return this.http.put<Typeoperation>(`${this.baseUrl}/${id}`, typeoperation, {});
  }

  deleteTypeoperation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {});
  }

  getTypeoperationsList(): Observable<Typeoperation[]> {
    return this.http.get<Typeoperation[]>(`${this.baseUrl}`, {});
  }
}
