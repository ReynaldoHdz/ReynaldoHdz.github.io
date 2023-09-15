import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  textInput: string = '';

  constructor(private apiService: ApiService, 
              private dataService: DataService,
              private http: HttpClient) {}

  sendText() {
    if (this.textInput) {
      const sanitizedTextInput = this.textInput.replace(/ /g, '+');

      this.apiService.generateColors(5, sanitizedTextInput).subscribe({
        next: (response) => {
          console.log('Text sent successfully');
          console.log('ApiData in InputFormComponent:', response);
          this.http.post<any>('https://st1-ad23-db.onrender.com/palettes/add', JSON.stringify({prompt: this.textInput, colors: response.colors, datetime: Math.floor(Date.now() / 1000)}), {'headers': { 'Content-Type': 'application/json'}}).subscribe({
            next: (data) => {
              this.dataService.setApiData(response);
            },
            error: error => {
              console.error('Error sending prompt and colors to database: ' + error)
            }
          })
        },
        error: (error) => {
          console.error('Error sending text:', error);
        },
      });

      
    }
  }
}
