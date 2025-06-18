// page.tsx
// Purpose: Entry point for the homepage; currently loads the main dashboard view.

import Dashboard from '@/components/dashboard/Dashboard';

export default function Home() {
  return (
    <main className="p-8">
      <Dashboard />
    </main>
  );
};