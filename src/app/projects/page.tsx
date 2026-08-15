import { getProjectById } from "@/lib/api/projects";
import CreateProject from "../components/CreateProject";
import { getUser } from "@/lib/api/users";

const page = async() => {
  const user =await getUser()
  console.log(user)
  const projects = await getProjectById(user!.id)
  console.log(projects)
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-2">MY PROJECTS</h1>

      <CreateProject />
    </div>
  );
};

export default page;
