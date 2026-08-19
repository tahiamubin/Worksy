// app/components/ProjectCard.tsx

import { Project } from "@/lib/types/project";
import { format } from "path";

import { JSX } from "react/jsx-runtime";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<Project["status"], string> = {
  Planning: "from-blue-500 to-blue-700",
  "In Progress": "from-green-500 to-green-700",
  "On Hold": "from-yellow-500 to-yellow-700",
  Completed: "from-purple-500 to-purple-700",
};

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const statusGradient = statusColors[project.status as keyof typeof statusColors] || "from-gray-500 to-gray-700";

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-slide-up border border-gray-700 hover:border-gray-500">
      {/* Gradient Status Badge */}
      <div className={`absolute top-0 right-0 bg-gradient-to-r ${statusGradient} text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-lg`}>
        {project.status}
      </div>

      {/* Project Name */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Client & Budget */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Client</span>
          <span className="text-white text-sm font-medium">{project.client}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Budget</span>
          <span className="text-white text-sm font-medium">
            {project.currency} {project.budget.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-3">
        <div>
          <span className="block">Start</span>
          <span className="text-white"> {format(new Date(project.startDate), "MMM dd, yyyy")}</span>
        </div>
        <div className="text-right">
          <span className="block">Deadline</span>
          <span className="text-white">{format(new Date(project.deadline), "MMM dd, yyyy")}</span>
        </div>
      </div>

      {/* Action Buttons - You can add update/delete/archive functionality here */}
      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-700">
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-3 py-1.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
          Update
        </button>
        <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm px-3 py-1.5 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-yellow-500/25">
          Archive
        </button>
        <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-3 py-1.5 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-red-500/25">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;