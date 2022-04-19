export type WorksList = Work[];

export type WorkStatus = 'ACTIVE' | 'INACTIVE';
export type WorkAppointmentStatus =
  | 'CREATED'
  | 'PROCESSED'
  | 'CANCELLED'
  | 'CALCULATED';

export interface Appointment {
  id: string;
  name: string;
  customer: string;
  startDate: string;
  endDate: string;
  status: WorkAppointmentStatus;
}

export interface Employee {
  id: string;
  name: string;
}

export interface Invoice {
  id: string;
  invoiceId: string;
  price: string;
}

export interface Work {
  id: string;
  workName: string;
  price: string | number;
  unit: string;
  status: WorkStatus;
  description: string;
  appointment: Appointment[];
  employee: Employee[];
  invoices: Invoice[];
}
