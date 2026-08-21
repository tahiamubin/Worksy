// app/components/DeleteModal.tsx
"use client";

import { useState, useEffect } from "react";
import { Project } from "@/lib/types/project";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (projectId: string) => void;
  project: Project | null;
  isDeleting?: boolean;
}

const DeleteModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  project,
  isDeleting = false 
}: DeleteModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handleConfirm = () => {
    if (project) {
      onConfirm(project.id);
    }
  };

  return (
    <div 
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Backdrop */}
      <div 
        className={`
          absolute inset-0 bg-black/80 backdrop-blur-sm
          transition-all duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div 
        className={`
          relative bg-black rounded-2xl border border-white/10 
          max-w-md w-full mx-4 p-8 shadow-2xl
          transform transition-all duration-300
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-xl animate-pulse" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-full p-4 border border-red-500/20">
              <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          Delete Project
        </h3>
        <p className="text-gray-400 text-center mb-6">
          Are you sure you want to delete <span className="text-white font-semibold">"{project?.name}"</span>?
          <br />
          <span className="text-sm text-red-400/80">This action cannot be undone.</span>
        </p>

        {/* Project Details Summary */}
        {project && (
          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Client</span>
              <span className="text-white">{project.client}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400">Status</span>
              <span className="text-white">{project.status}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400">Budget</span>
              <span className="text-white">{project.currency} {project.budget.toLocaleString()}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-200"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={isDeleting}
            className={`
              flex-1 px-4 py-2.5 rounded-xl text-white font-medium
              transition-all duration-200 relative overflow-hidden
              ${isDeleting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25'
              }
            `}
          >
            {isDeleting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Deleting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete Project
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;