import React from 'react';
import ProjectCard from '@/app/ui/cards/ProjectCard';

interface ProjectsProps {
  projectName?: string | null;
}

export default function ProjectOverview({ projectName }: ProjectsProps) {
  return (
    <ProjectCard>
      <h3 className='text-sm font-bold text-gray-600'>{projectName}</h3>
    </ProjectCard>
  );
}
