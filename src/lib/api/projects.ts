const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface Project {
  _id: string;
  name: string;
  description: string;
  budget: number;
  currency: string;
  startDate: string;
  deadline: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed";
}

export const getProject = async ()=> {
  const res = await fetch(`${baseURL}/project`);
  return res.json() as Promise<Project[]>;
};
