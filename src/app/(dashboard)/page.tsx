import { tasks } from '@/lib/data';
import { StatsCard } from '@/components/dashboard/stats-card';
import { TasksChart } from '@/components/dashboard/tasks-chart';
import { RecentTasks } from '@/components/dashboard/recent-tasks';
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  ListTodo,
} from 'lucide-react';

export default function DashboardPage() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const overdueTasks = tasks.filter((task) => task.status === 'Delayed').length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">
          Here&apos;s a quick overview of your tasks and activities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value={totalTasks.toString()}
          icon={ListTodo}
          description={`${completedTasks} completed`}
        />
        <StatsCard
          title="Pending Tasks"
          value={pendingTasks.toString()}
          icon={Activity}
          description="Across all organizations"
        />
        <StatsCard
          title="Completed Tasks"
          value={completedTasks.toString()}
          icon={CheckCircle2}
          description={`+${Math.round((completedTasks/totalTasks) * 100)}% this month`}
        />
        <StatsCard
          title="Overdue Tasks"
          value={overdueTasks.toString()}
          icon={AlertCircle}
          description="Action required"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <TasksChart />
        </div>
        <div className="lg:col-span-3">
          <RecentTasks />
        </div>
      </div>
    </div>
  );
}
