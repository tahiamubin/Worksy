export interface Project {
  id: string; // or _id — match whatever your API returns, and update this + page.tsx + your API type consistently
  name: string;
  description: string;
  client: string; // currently used in JSX but missing from your Project type in lib/api/projects.ts
  budget: number;
  currency: string;
  startDate: string;
  deadline: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed";
}