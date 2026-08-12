import CreateProject from "../components/CreateProject";

const page = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold text-white mb-6">My Projects</h1>

      <CreateProject />
    </div>
  );
};

export default page;
