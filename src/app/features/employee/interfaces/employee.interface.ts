export interface Employee {
  id: string;
  name: string;
  role: string;
  joinDate: string;
  endDate: string | null;
}

export type PartialEmployee = Partial<Employee>;
