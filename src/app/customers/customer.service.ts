import { Injectable, signal } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly customers = signal<Customer[]>([
    {
      id: 1,
      name: 'Ananya Sharma',
      email: 'ananya.sharma@example.com',
      phone: '+91 98765 43210',
      dateOfBirth: '1990-04-12',
      address: '12, MG Road, Bengaluru, Karnataka',
      registeredOn: '2024-01-15',
    },
    {
      id: 2,
      name: 'Rajiv Mehta',
      email: 'rajiv.mehta@example.com',
      phone: '+91 91234 56789',
      dateOfBirth: '1985-08-22',
      address: '45, Nehru Nagar, Mumbai, Maharashtra',
      registeredOn: '2024-03-08',
    },
    {
      id: 3,
      name: 'Priya Nair',
      email: 'priya.nair@example.com',
      phone: '+91 87654 32109',
      dateOfBirth: '1995-11-05',
      address: '7, Anna Salai, Chennai, Tamil Nadu',
      registeredOn: '2024-05-20',
    },
    {
      id: 4,
      name: 'Suresh Patel',
      email: 'suresh.patel@example.com',
      phone: '+91 99887 76655',
      dateOfBirth: '1978-02-17',
      address: '33, CG Road, Ahmedabad, Gujarat',
      registeredOn: '2024-07-11',
    },
    {
      id: 5,
      name: 'Meera Iyer',
      email: 'meera.iyer@example.com',
      phone: '+91 70123 45678',
      dateOfBirth: '2000-09-30',
      address: '21, Jubilee Hills, Hyderabad, Telangana',
      registeredOn: '2025-01-03',
    },
  ]);

  getAll() {
    return this.customers.asReadonly();
  }

  add(data: Omit<Customer, 'id' | 'registeredOn'>): void {
    const id =
      this.customers().length > 0
        ? Math.max(...this.customers().map((c) => c.id)) + 1
        : 1;
    const newCustomer: Customer = {
      ...data,
      id,
      registeredOn: new Date().toISOString().split('T')[0],
    };
    this.customers.update((list) => [...list, newCustomer]);
  }
}
