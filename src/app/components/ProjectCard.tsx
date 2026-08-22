"use client";

import { Project } from "@/lib/types/project";
import { format } from "path";

import { JSX } from "react/jsx-runtime";
import UpdateModal from "./UpsdateModal";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<Project["status"], string> = {
  Planning: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "In Progress": "bg-green-500/20 text-green-400 border-green-500/30",
  "On Hold": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Completed: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const statusIcons: Record<Project["status"], string> = {
  Planning: "📋",
  "In Progress": "⚡",
  "On Hold": "⏸️",
  Completed: "✅",
};

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const statusClass =
    statusColors[project.status] ||
    "bg-gray-500/20 text-gray-400 border-gray-500/30";
  const statusIcon = statusIcons[project.status] || "📌";

  return (
    <div className="group relative bg-black rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-white/10 hover:border-white/20 backdrop-blur-sm hover:bg-black/95">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 rounded-2xl blur-xl group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

      {/* Status Badge - Modern subtle */}
      <div
        className={`relative inline-flex items-center gap-1.5 ${statusClass} border px-3 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-sm`}
      >
        <span className="text-sm">{statusIcon}</span>
        {project.status}
      </div>

      {/* Project Name */}
      <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
        {project.name}
      </h3>

      {/* Description */}
      <p className="relative text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
        {project.description}
      </p>

      {/* Client & Budget - Clean layout */}
      <div className="relative space-y-2 mb-4 bg-white/5 rounded-xl p-3 border border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs uppercase tracking-wider">
            Client
          </span>
          <span className="text-white text-sm font-medium">
            {project.client}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs uppercase tracking-wider">
            Budget
          </span>
          <span className="text-white text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {project.currency} {project.budget.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Dates - Clean timeline */}
      <div className="relative flex items-center justify-between text-xs border-t border-white/5 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">📅</span>
          <div>
            <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
              Start
            </span>
            <span className="text-white text-xs">
              {format(new Date(project.startDate), "MMM dd, yyyy")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">⏰</span>
          <div className="text-right">
            <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
              Deadline
            </span>
            <span className="text-white text-xs">
              {format(new Date(project.deadline), "MMM dd, yyyy")}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons - Ghost style */}
      <div className="relative flex gap-2 mt-4 pt-3 border-t border-white/5">
        <div className="flex-1 bg-white/5 text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-blue-500/30 group/btn">
          <span className="flex items-center justify-center gap-1">
            <span className="group-hover/btn:text-blue-400 transition-colors">
              <span>
                <UpdateModal></UpdateModal>
              </span>
            </span>
          </span>
        </div>

        <button className="flex-1 bg-white/5 text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-red-500/30 group/btn">
          <span className="flex items-center justify-center gap-1">
            <span>🗑️</span>

            <span className="group-hover/btn:text-red-400 transition-colors">
              Delete
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
