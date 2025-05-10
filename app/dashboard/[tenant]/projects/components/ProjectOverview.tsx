import React from 'react';
import ProjectCard from '@/app/ui/cards/ProjectCard';
import InfoBadge from '@/app/ui/badges/InfoBadge';
interface ProjectsProps {
  projectName?: string | null;
  status?: string | null;
}

export default function ProjectOverview({
  projectName,
  status,
}: ProjectsProps) {
  return (
    <ProjectCard>
      <div className='flex justify-between items-center'>
        <h3 className='text-sm font-bold text-gray-600'>{projectName}</h3>
        <InfoBadge text={status ?? ''} />
      </div>
    </ProjectCard>
  );
}
