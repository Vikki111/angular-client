import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from '../../components/position/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private baseUrl = 'http://localhost:8080/positions';

  constructor(private http: HttpClient) { }

  getPosition(id: number): Observable<Position> {
//     return this.http.get(`${this.baseUrl}/${id}`);
    return this.http.get<Position>(`${this.baseUrl}/${id}`, {});
  }

  createPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(`${this.baseUrl}`, position);
  }

  updatePosition(id: number, position: Position): Observable<Position> {
//     return this.http.put(`${this.baseUrl}/${id}`, position);
    return this.http.put<Position>(`${this.baseUrl}/${id}`, position, {});
  }

  deletePosition(id: number): Observable<String> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPositionsList(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}`, {});
  }

//   return this.http.put<Car>(url, car, {observe: 'response'});
}
