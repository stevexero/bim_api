interface DashboardCardProps {
  children: React.ReactNode;
}

export default function DashboardCard({ children }: DashboardCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-sm shadow-gray-400 border border-gray-300 p-4'>
      {children}
    </div>
  );
}
