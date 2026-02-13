import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { users, tasks } from "@/lib/data"

export function RecentTasks() {
    const recentTasks = tasks.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>An overview of the latest task updates.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {recentTasks.map(task => {
            const assignee = users.find(u => u.id === task.assigneeId);
            return (
                <div key={task.id} className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={assignee?.avatarUrl} alt="Avatar" />
                        <AvatarFallback>{assignee?.initials}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            {task.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Assigned to {assignee?.name}
                        </p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">
                        {task.status}
                    </div>
                </div>
            )
        })}
      </CardContent>
    </Card>
  )
}
