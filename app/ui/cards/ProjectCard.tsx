interface ProjectCardProps {
  children: React.ReactNode;
}
export default function ProjectCard({ children }: ProjectCardProps) {
  return (
    <div className='bg-gray-50 rounded-lg shadow-sm shadow-gray-400 border border-gray-300 p-4 hover:shadow-md hover:shadow-gray-400 hover:border-gray-400 hover:bg-white transition-all duration-300'>
      {children}
    </div>
  );
}
