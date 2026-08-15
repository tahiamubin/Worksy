const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const createProjects = async <T>(data: T) => {
  const res = await fetch(`${baseURL}/project`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json() as Promise<T & { _id: string}>;
};
