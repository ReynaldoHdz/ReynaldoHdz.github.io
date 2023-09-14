
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    setInterval(()=>{
      this.http.get<any>('https://st1-ad23-db.onrender.com/palettes').subscribe({
        next: (data) => {
          // Check if 'data' is an array
          if (Array.isArray(data)) {
            this.data = data.reverse();
          }
        },
        error: error => {
          console.error('Error fetching data: ' + error);
        }
      });
    },5000);
  }
}
