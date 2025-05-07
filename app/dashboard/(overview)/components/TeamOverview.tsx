import DashboardCard from '@/app/ui/cards/DashboardCard';

export default function TeamOverview() {
  return (
    <DashboardCard>
      <h1 className='text-sm font-bold text-gray-600'>Team Overview</h1>
      <p className='text-sm text-gray-500 mt-4'>Team Members: 0</p>
    </DashboardCard>
  );
}
