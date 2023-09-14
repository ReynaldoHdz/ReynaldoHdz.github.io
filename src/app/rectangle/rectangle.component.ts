import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  currentColor = '#3498db';

  rectangles: number[] = []; // Initialize an empty array to store rectangle data

  apiData: any; // Property to store the data

  constructor(private apiService: ApiService, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.apiData$.subscribe((data) => {
      this.apiData = data.colors;
    });
  }

  // Generate new rectangles, up to a maximum of 10
  generateRectangles() {
    if (this.rectangles.length < 10) {
      this.rectangles.push(this.rectangles.length + 1);
    }
  }

  // Delete rectangles until you have a minimum of 5
  deleteRectangles() {
    if (this.rectangles.length > 5) {
      this.rectangles.pop();
    }
  }
}
