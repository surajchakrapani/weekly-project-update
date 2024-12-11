import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdatesComponent } from './updates/updates/updates.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './updates/update/update.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpdateComponent, HeaderComponent, SidenavComponent, SidenavComponent, FooterComponent, UpdatesComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weekly-project-update';
  showTable = true; // By default, show the user data table

  // Show the user data table component
  showUserDataTable() {
    this.showTable = true;
  }

  // Show the user input form component
  showUserInputForm() {
    this.showTable = false;
  }
}
