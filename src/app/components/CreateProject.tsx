"use client";

import { createProjects } from "@/lib/actions/projects";

import { useState } from "react";
import toast from "react-hot-toast";

// Shape of the project data
interface ProjectFormData {
  name: string;
  description: string;
  client: string;
  budget: string;
  currency: string;
  startDate: string;
  deadline: string;
  status: string;
}

const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];
const STATUSES = ["Planning", "In Progress", "On Hold", "Completed"];

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as unknown as ProjectFormData;

    await createProjects(data);
    toast.success("Project created successfully!");
  };

  return (
    <div className="bg-black min-h-screen p-8">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex  items-center gap-2 bg-white text-black font-semibold rounded-xl px-6 py-2.5 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
      >
        +
      </button>

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-black/95 border border-white/10 rounded-2xl shadow-2xl shadow-white/5 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white/40 hover:text-white bg-transparent hover:bg-white/10 rounded-lg p-1.5 transition-colors"
            >
              {/* <X className="w-5 h-5" /> */}
            </button>

            {/* Header */}
            <div className="p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-white">+</h2>
              </div>
              <p className="text-sm text-white/40">
                Fill in the project details below. All fields marked with * are
                required.
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              <form
                id="create-project-form"
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                {/* Project Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-medium">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter project name"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-medium">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    placeholder="Describe your project..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Client Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-medium">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter project name"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Budget & Currency */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-sm font-medium">
                      Budget *
                    </label>
                    <input
                      type="number"
                      name="budget"
                      required
                      placeholder="50000"
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-sm font-medium">
                      Currency *
                    </label>
                    <select
                      name="currency"
                      required
                      defaultValue="USD"
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      {CURRENCIES.map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                          className="bg-black"
                        >
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Start Date & Deadline */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-sm font-medium">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-sm font-medium">
                      Deadline *
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Status */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-medium">
                    Status *
                  </label>
                  <select
                    name="status"
                    required
                    defaultValue="Planning"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {STATUSES.map((status) => (
                      <option key={status} value={status} className="bg-black">
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 border-t border-white/10">
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl px-6 py-2.5 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="create-project-form"
                  disabled={isSubmitting}
                  className="bg-white text-black font-semibold rounded-xl px-6 py-2.5 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating..." : "Create Project"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProject;
