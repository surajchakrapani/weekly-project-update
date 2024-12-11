import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../update-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updates',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
  updateData: any[] = []; // To store user data

  constructor(private updateDataService: UpdateDataService) {}

  ngOnInit() {
    // Load data from the service
    this.updateDataService.loadUpdateData().subscribe((data) => {
      this.updateData = data;
    });
  }
}
