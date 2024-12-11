import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateDataService } from '../../update-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

  formData = {
    projectName: '',
    update: '',
    weekEndingDate: '',
    userName: ''
  };

  constructor(private updateDataService: UpdateDataService) {}

  onSubmit() {
    // Save the form data using the service
    this.updateDataService.saveUserData(this.formData);

    // Clear the form after submission
    this.formData = {
      projectName: '',
      update: '',
      weekEndingDate: '',
      userName: ''
    };

    alert('Data saved successfully!');
  }
}
