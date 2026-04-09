import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems = [
    { label: 'Dashboard',    icon: 'dashboard',       route: '/dashboard' },
    { label: 'Customers',    icon: 'people',          route: '/customers' },
    { label: 'Appointments', icon: 'calendar_today',  route: '/appointments' },
    { label: 'Doctors',      icon: 'medical_services', route: '/doctors' },
    { label: 'Prescriptions',icon: 'description',     route: '/prescriptions' },
    { label: 'Reports',      icon: 'bar_chart',       route: '/reports' },
    { label: 'Settings',     icon: 'settings',        route: '/settings' },
  ];
}
