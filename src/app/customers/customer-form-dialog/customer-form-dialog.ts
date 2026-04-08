import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-customer-form-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  templateUrl: './customer-form-dialog.html',
  styleUrl: './customer-form-dialog.css',
})
export class CustomerFormDialog {
  private readonly dialogRef = inject(MatDialogRef<CustomerFormDialog>);

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dateOfBirth: new FormControl<Date | null>(null, { validators: [Validators.required] }),
    address: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { dateOfBirth, ...rest } = this.form.getRawValue();
    const dob = dateOfBirth
      ? [
          dateOfBirth.getFullYear(),
          String(dateOfBirth.getMonth() + 1).padStart(2, '0'),
          String(dateOfBirth.getDate()).padStart(2, '0'),
        ].join('-')
      : '';
    this.dialogRef.close({ ...rest, dateOfBirth: dob });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
