export interface Employee {
  empId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  address: string;
}

export interface Column {
  field: string;
  label: string;
}

export interface Project {
  projectId: string;
  projectName: string;
  description: string;
}
