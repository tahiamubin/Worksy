const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface Project {
  _id: string;
  name: string;
  description: string;
  budget: number;
  currency: string;
  startDate: string;
  deadline: string;
  status: string;
}

export const getProjectById = async (id: string): Promise<Project> => {
  const res = await fetch(`${baseURL}/project/${id}`);
  res.json() as Promise<Project>;
};
