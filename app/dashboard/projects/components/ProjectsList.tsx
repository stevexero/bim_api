import { getAllProjectsByTenantId } from '@/app/lib/data/projects';
import ProjectCard from '@/app/ui/cards/ProjectCard';
export default async function ProjectsList({ tenantId }: { tenantId: string }) {
  const projects = await getAllProjectsByTenantId(tenantId);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
