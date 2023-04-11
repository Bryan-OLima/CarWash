import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wash } from '../modules/home/Models/washes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WashService {

  private apiUrl: string = 'https://localhost:7232/';
  private apiVersion: string = 'v1/';
  private apiWash: string = 'CarWash';

  constructor(private _http: HttpClient) { }

  getWash(): Observable<Wash[]> {
    return this._http.get<Wash[]>(`${this.apiUrl}${this.apiVersion}${this.apiWash}`);
  }

  postWash(wash: Wash): Observable<Wash>{
    return this._http.post<Wash>(`${this.apiUrl}${this.apiVersion}${this.apiWash}`, wash);
  }

  getWashById(id: number):Observable<Wash> {
    return this._http.get<Wash>(`${this.apiUrl}${this.apiVersion}${this.apiWash}/${id}`);
  }

  putWash(id: number, wash: Wash) {
    this._http.put(`${this.apiUrl}${this.apiVersion}${this.apiWash}/${id}`, wash);
  }

  deleteWash(id: number):Observable<Wash> {
    return this._http.delete<Wash>(`${this.apiUrl}${this.apiVersion}${this.apiWash}/${id}`);
  }
}