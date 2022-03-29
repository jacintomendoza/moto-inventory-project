import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moto } from './moto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoService {
private apiUrl = "https://moto-inventory-database.herokuapp.com/motorbikes";
  constructor(private http: HttpClient) { }
  
  
  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl);
  }

  // SEARCH FUNCTIONS ///////////////////////////////////////////

  searchMake(searchTerm: string): Observable<Moto[]>{
    return this.http.get<Moto[]>(`${this.apiUrl}/make/searchTerm`);
  }

  searchVin(searchTerm: string): Observable<Moto[]>{
    return this.http.get<Moto[]>(`${this.apiUrl}/vin/searchTerm`);
  }

  searchType(searchTerm: string): Observable<Moto[]>{
    return this.http.get<Moto[]>(`${this.apiUrl}/type/searchTerm`);
  }

  ////////////////////////////////////////////////////////////////

}