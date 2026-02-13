import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { TaskCard } from '@/components/tasks/task-card';
import { tasks, users } from '@/lib/data';
import type { TaskStatus } from '@/lib/types';

const taskStatuses: TaskStatus[] = ['New', 'On Time', 'Delayed', 'Completed'];

export default function TasksPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-headline">Tasks</h1>
          <p className="text-muted-foreground">Manage all your tasks in one place.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Task
        </Button>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {taskStatuses.map(status => (
            <TabsTrigger key={status} value={status}>{status}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tasks.map((task) => {
              const assignee = users.find((u) => u.id === task.assigneeId);
              return <TaskCard key={task.id} task={task} assignee={assignee} />;
            })}
          </div>
        </TabsContent>
        {taskStatuses.map(status => (
          <TabsContent key={status} value={status}>
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tasks.filter(t => t.status === status).map((task) => {
                const assignee = users.find((u) => u.id === task.assigneeId);
                return <TaskCard key={task.id} task={task} assignee={assignee} />;
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
