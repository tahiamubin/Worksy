"use client";


import { useEffect, useState } from "react";
import { CgArrangeBack } from "react-icons/cg";
import { 
  FiPlus, 
  FiEdit2, 
  FiArchive, 
  FiTrash2, 
  FiSearch,
  FiFilter,
  FiCalendar,
  FiDollarSign,
  FiUsers
} from "react-icons/fi";

// Types
type Client = {
  id: string;
  name: string;
};

type Project = {
  id: string;
  name: string;
  description: string;
  clientId: string;
  clientName: string;
  budget: number;
  currency: string;
  startDate: string;
  deadline: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed";
  isArchived: boolean;
  createdAt: string;
};

type ProjectFormData = {
  name: string;
  description: string;
  clientId: string;
  budget: string;
  currency: string;
  startDate: string;
  deadline: string;
  status: string;
};

// Mock data
const MOCK_CLIENTS: Client[] = [
  { id: "1", name: "Google" },
  { id: "2", name: "Microsoft" },
  { id: "3", name: "Amazon" },
  { id: "4", name: "Apple" },
  { id: "5", name: "Meta" },
];

const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete redesign of corporate website with new branding",
    clientId: "1",
    clientName: "Google",
    budget: 50000,
    currency: "USD",
    startDate: "2026-01-15",
    deadline: "2026-06-30",
    status: "In Progress",
    isArchived: false,
    createdAt: "2026-01-10T10:00:00Z",
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "iOS and Android mobile app for customer engagement",
    clientId: "2",
    clientName: "Microsoft",
    budget: 75000,
    currency: "USD",
    startDate: "2026-02-01",
    deadline: "2026-08-15",
    status: "Planning",
    isArchived: false,
    createdAt: "2026-01-20T14:30:00Z",
  },
  {
    id: "3",
    name: "Cloud Migration",
    description: "Migrating on-premise infrastructure to AWS cloud",
    clientId: "3",
    clientName: "Amazon",
    budget: 120000,
    currency: "USD",
    startDate: "2025-11-01",
    deadline: "2026-03-31",
    status: "On Hold",
    isArchived: false,
    createdAt: "2025-10-15T09:00:00Z",
  },
  {
    id: "4",
    name: "Marketing Campaign",
    description: "Q2 digital marketing campaign for product launch",
    clientId: "4",
    clientName: "Apple",
    budget: 30000,
    currency: "USD",
    startDate: "2026-03-01",
    deadline: "2026-05-30",
    status: "Completed",
    isArchived: false,
    createdAt: "2026-02-01T11:00:00Z",
  },
];

const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];
const STATUSES = ["Planning", "In Progress", "On Hold", "Completed"];

const statusColorMap = {
  "Planning": "default",
  "In Progress": "primary",
  "On Hold": "warning",
  "Completed": "success",
} as const;

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [clients] = useState<Client[]>(MOCK_CLIENTS);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showArchived, setShowArchived] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { 
    isOpen: isEditOpen, 
    onOpen: onEditOpen, 
    onClose: onEditClose 
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    const matchesArchive = showArchived ? project.isArchived : !project.isArchived;
    return matchesSearch && matchesStatus && matchesArchive;
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as ProjectFormData;
    
    const newProject: Project = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      clientId: data.clientId,
      clientName: clients.find(c => c.id === data.clientId)?.name || "",
      budget: parseFloat(data.budget),
      currency: data.currency,
      startDate: data.startDate,
      deadline: data.deadline,
      status: data.status as Project["status"],
      isArchived: false,
      createdAt: new Date().toISOString(),
    };

    setProjects([newProject, ...projects]);
    setIsSubmitting(false);
    onClose();
  };

  const onEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as ProjectFormData;
    
    setProjects(projects.map(p => {
      if (p.id === editingProject?.id) {
        return {
          ...p,
          name: data.name,
          description: data.description,
          clientId: data.clientId,
          clientName: clients.find(c => c.id === data.clientId)?.name || "",
          budget: parseFloat(data.budget),
          currency: data.currency,
          startDate: data.startDate,
          deadline: data.deadline,
          status: data.status as Project["status"],
        };
      }
      return p;
    }));
    onEditClose();
  };

  const handleArchive = (id: string) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, isArchived: !p.isArchived } : p
    ));
  };

  const handleDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter(p => p.id !== projectToDelete));
      setProjectToDelete(null);
      onDeleteClose();
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    onEditOpen();
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CgArrangeBack className="h-4 w-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Project Management
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Projects
              </h1>
              <p className="text-white/60 mt-1">
                Manage all your projects in one place
              </p>
            </div>
            <Button
              onPress={onOpen}
              className="bg-white text-black font-semibold rounded-xl px-6 h-11 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <FiPlus className="w-4 h-4" />
              New Project
            </Button>
          </div>

          {/* Filters */}
          <div className={`flex flex-col md:flex-row gap-4 mb-8 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`} style={{ transitionDelay: "100ms" }}>
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                classNames={{
                  input: "text-white placeholder-white/30 pl-10",
                  inputWrapper: "bg-white/5 border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl",
                }}
              />
            </div>
            <div className="flex gap-3">
              <Select
                placeholder="Status"
                selectedKeys={statusFilter === "all" ? new Set([]) : new Set([statusFilter])}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-40"
                classNames={{
                  trigger: "bg-white/5 border-white/10 rounded-xl",
                  value: "text-white/80",
                }}
              >
                <SelectItem key="all" value="all">All Status</SelectItem>
                {STATUSES.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </Select>
              <Button
                variant={showArchived ? "solid" : "bordered"}
                onPress={() => setShowArchived(!showArchived)}
                className={`rounded-xl ${
                  showArchived 
                    ? "bg-white text-black" 
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                }`}
              >
                <FiArchive className="w-4 h-4" />
                Archived
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`} style={{ transitionDelay: "200ms" }}>
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-white/40">No projects found</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 ${
                    project.isArchived ? "opacity-60" : ""
                  }`}
                >
                  {project.isArchived && (
                    <div className="absolute top-4 right-4">
                      <Chip size="sm" className="bg-white/10 text-white/60">
                        Archived
                      </Chip>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/40 flex items-center gap-1">
                        <FiUsers className="w-3 h-3" />
                        {project.clientName}
                      </p>
                    </div>
                    <Chip
                      color={statusColorMap[project.status]}
                      variant="flat"
                      className="capitalize"
                    >
                      {project.status}
                    </Chip>
                  </div>

                  <p className="text-sm text-white/50 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1 text-white/40">
                      <FiDollarSign className="w-3 h-3" />
                      {project.currency} {project.budget.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <FiCalendar className="w-3 h-3" />
                      {formatDate(project.startDate)} - {formatDate(project.deadline)}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    <Button
                      size="sm"
                      onPress={() => handleEdit(project)}
                      className="flex-1 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <FiEdit2 className="w-3 h-3" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      onPress={() => handleArchive(project.id)}
                      className="flex-1 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <FiArchive className="w-3 h-3" />
                      {project.isArchived ? "Unarchive" : "Archive"}
                    </Button>
                    <Button
                      size="sm"
                      onPress={() => {
                        setProjectToDelete(project.id);
                        onDeleteOpen();
                      }}
                      className="bg-white/5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg"
                    >
                      <FiTrash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Create Project Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className="bg-black/95 backdrop-blur-xl border border-white/10">
        <ModalContent>
          <ModalHeader className="text-white text-xl font-bold">Create New Project</ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <Fieldset className="w-full">
                <Fieldset.Group className="space-y-4">
                  <TextField isRequired name="name">
                    <Label className="text-white/60">Project Name</Label>
                    <Input
                      placeholder="Enter project name"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                    <FieldError className="text-red-400" />
                  </TextField>

                  <TextField name="description">
                    <Label className="text-white/60">Description</Label>
                    <TextArea
                      placeholder="Enter project description"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl min-h-[100px]",
                      }}
                    />
                  </TextField>

                  <Select isRequired name="clientId" label="Client">
                    {clients.map((client) => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <TextField isRequired name="budget" type="number">
                    <Label className="text-white/60">Budget</Label>
                    <Input
                      placeholder="50000"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <Select isRequired name="currency" label="Currency" defaultSelectedKeys={["USD"]}>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency}
                      </SelectItem>
                    ))}
                  </Select>

                  <TextField isRequired name="startDate" type="date">
                    <Label className="text-white/60">Start Date</Label>
                    <Input
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <TextField isRequired name="deadline" type="date">
                    <Label className="text-white/60">Deadline</Label>
                    <Input
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <Select isRequired name="status" label="Status" defaultSelectedKeys={["Planning"]}>
                    {STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </Select>
                </Fieldset.Group>

                <ModalFooter className="px-0 mt-6">
                  <Button onPress={onClose} className="bg-white/5 text-white/60 hover:text-white rounded-xl">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="bg-white text-black font-semibold rounded-xl px-6"
                  >
                    Create Project
                  </Button>
                </ModalFooter>
              </Fieldset>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Edit Project Modal */}
      <Modal isOpen={isEditOpen} onClose={onEditClose} className="bg-black/95 backdrop-blur-xl border border-white/10">
        <ModalContent>
          <ModalHeader className="text-white text-xl font-bold">Edit Project</ModalHeader>
          <ModalBody>
            <Form onSubmit={onEditSubmit}>
              <Fieldset className="w-full">
                <Fieldset.Group className="space-y-4">
                  <TextField isRequired name="name" defaultValue={editingProject?.name}>
                    <Label className="text-white/60">Project Name</Label>
                    <Input
                      placeholder="Enter project name"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <TextField name="description" defaultValue={editingProject?.description}>
                    <Label className="text-white/60">Description</Label>
                    <TextArea
                      placeholder="Enter project description"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl min-h-[100px]",
                      }}
                    />
                  </TextField>

                  <Select 
                    isRequired 
                    name="clientId" 
                    label="Client"
                    defaultSelectedKeys={new Set([editingProject?.clientId || ""])}
                  >
                    {clients.map((client) => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <TextField 
                    isRequired 
                    name="budget" 
                    type="number"
                    defaultValue={editingProject?.budget.toString()}
                  >
                    <Label className="text-white/60">Budget</Label>
                    <Input
                      placeholder="50000"
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <Select 
                    isRequired 
                    name="currency" 
                    label="Currency"
                    defaultSelectedKeys={new Set([editingProject?.currency || "USD"])}
                  >
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency}
                      </SelectItem>
                    ))}
                  </Select>

                  <TextField 
                    isRequired 
                    name="startDate" 
                    type="date"
                    defaultValue={editingProject?.startDate}
                  >
                    <Label className="text-white/60">Start Date</Label>
                    <Input
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <TextField 
                    isRequired 
                    name="deadline" 
                    type="date"
                    defaultValue={editingProject?.deadline}
                  >
                    <Label className="text-white/60">Deadline</Label>
                    <Input
                      classNames={{
                        input: "text-white placeholder-white/30",
                        inputWrapper: "bg-white/5 border-white/10 rounded-xl",
                      }}
                    />
                  </TextField>

                  <Select 
                    isRequired 
                    name="status" 
                    label="Status"
                    defaultSelectedKeys={new Set([editingProject?.status || "Planning"])}
                  >
                    {STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </Select>
                </Fieldset.Group>

                <ModalFooter className="px-0 mt-6">
                  <Button onPress={onEditClose} className="bg-white/5 text-white/60 hover:text-white rounded-xl">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-white text-black font-semibold rounded-xl px-6"
                  >
                    Update Project
                  </Button>
                </ModalFooter>
              </Fieldset>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} className="bg-black/95 backdrop-blur-xl border border-white/10">
        <ModalContent>
          <ModalHeader className="text-white text-xl font-bold">Delete Project</ModalHeader>
          <ModalBody>
            <p className="text-white/60">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onPress={onDeleteClose} className="bg-white/5 text-white/60 hover:text-white rounded-xl">
              Cancel
            </Button>
            <Button
              onPress={handleDelete}
              className="bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl"
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}