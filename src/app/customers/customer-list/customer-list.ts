import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { CustomerFormDialog } from '../customer-form-dialog/customer-form-dialog';

@Component({
  selector: 'app-customer-list',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  private readonly customerService = inject(CustomerService);
  private readonly dialog = inject(MatDialog);

  readonly customers = this.customerService.getAll();

  readonly displayedColumns: (keyof Customer)[] = [
    'id',
    'name',
    'email',
    'phone',
    'dateOfBirth',
    'address',
    'registeredOn',
  ];

  openCreateDialog(): void {
    const ref = this.dialog.open(CustomerFormDialog, { width: '500px' });
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.customerService.add(result);
      }
    });
  }
}
