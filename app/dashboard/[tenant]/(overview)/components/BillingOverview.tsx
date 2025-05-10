import DashboardCard from '@/app/ui/cards/DashboardCard';

export default function BillingOverview() {
  return (
    <DashboardCard>
      <h1 className='text-sm font-bold text-gray-600'>Billing Overview</h1>
      <p className='text-sm text-gray-500 mt-4'>Billing: $0</p>
    </DashboardCard>
  );
}
