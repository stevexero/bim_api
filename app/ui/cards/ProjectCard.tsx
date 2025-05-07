interface ProjectCardProps {
  project: {
    id: string;
    project_name: string;
    project_slug: string;
  };
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='flex flex-col gap-2 p-4 border border-white rounded-md'>
      <h1>{project.project_name}</h1>
    </div>
  );
}
