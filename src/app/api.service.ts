import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://187.192.90.172:8080';
  private apiData: any; // Store the API response data
  
  constructor(private http: HttpClient) { }
  
  generateColors(count: number, prompt: string): Observable<any> {
    const url = `${this.apiUrl}/request/${count}/${prompt}`;
    return this.http.get(url);
  }

  setApiData(data: any) {
    this.apiData = data;
    console.log('ApiData set in InputFormComponent:', data);
  }

  getApiData() {
    return this.apiData;
  }
}
