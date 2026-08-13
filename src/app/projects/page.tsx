import CreateProject from "../components/CreateProject";

const page = () => {
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-2">MY PROJECTS</h1>

      <CreateProject />
    </div>
  );
};

export default page;
