import { Project } from "../types/project";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const createProjects = async (data: Project) => {
  const res = await fetch(`${baseURL}/project`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
