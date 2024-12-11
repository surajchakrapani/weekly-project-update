import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class UpdateDataService {
  private updateData: any[] = []; // Array to hold user data
  private dataLoaded = false;  // To track if data is loaded from JSON

  constructor(private http: HttpClient) {}

  loadUpdateData(): Observable<any[]> {
    if (!this.dataLoaded) {
      return this.http.get<any[]>('updates-data.json').pipe(
        map((data) => {
          this.updateData = data;
          this.dataLoaded = true;
          return this.updateData;
        })
      );
    } else {
      return new Observable((observer) => {
        observer.next(this.updateData);
        observer.complete();
      });
    }
  }
  // Save user data
  saveUserData(data: { projectName: string; update: string; weekEndingDate: string; userName: string }) {
    this.updateData.push(data);
    console.log('Data saved:', this.updateData);
  }

  // Retrieve all saved user data
  getAllUserData() {
    return this.updateData;
  }
}