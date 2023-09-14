import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiDataSubject = new BehaviorSubject<any>(null);
  apiData$ = this.apiDataSubject.asObservable();

  setApiData(data: any) {
    this.apiDataSubject.next(data);
  }
}
