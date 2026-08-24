export interface Project {

  name: string;
  description: string;
  client: string; 
  budget: number;
  currency: string;
  startDate: string;
  deadline: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed";
  userId: string
}