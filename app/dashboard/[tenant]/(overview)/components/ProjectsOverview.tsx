import { getAllProjectsByTenantId } from '@/app/lib/data/projects';
import DashboardCard from '@/app/ui/cards/DashboardCard';

interface ProjectsOverviewProps {
  tenantId: string;
}

export default async function ProjectsOverview({
  tenantId,
}: ProjectsOverviewProps) {
  const projects = await getAllProjectsByTenantId(tenantId);

  return (
    <DashboardCard>
      <h3 className='text-sm font-bold text-gray-600'>Projects Overview</h3>
      <p className='text-sm text-gray-500 mt-4'>Projects: {projects?.length}</p>
    </DashboardCard>
  );
}
