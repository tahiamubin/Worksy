// app/projects/page.tsx
import { getProject } from "@/lib/api/projects";
import CreateProject from "../components/CreateProject";
import { getUser } from "@/lib/api/users";
import ProjectCard from "../components/ProjectCard";
import { JSX } from "react/jsx-runtime";


const page = async (): Promise<JSX.Element> => {
  const user = await getUser();
  console.log(user!.id);
  const getProjects = await getProject();
  const projects = getProjects.filter(p => p.userId === user!.id)
  console.log(projects);

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
        MY PROJECTS
      </h1>
      
      {/* show users projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* create projects */}
      <CreateProject />
    </div>
  );
};

export default page;