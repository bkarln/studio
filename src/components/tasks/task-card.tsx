import { MoreHorizontal, Calendar, Paperclip, Clock } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import type { Task, User, TaskStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  assignee?: User;
}

const statusStyles: Record<TaskStatus, string> = {
    'New': 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700',
    'On Time': 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700',
    'Delayed': 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700',
    'Completed': 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600',
}

export function TaskCard({ task, assignee }: TaskCardProps) {
  const deadline = new Date(task.deadline);

  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="flex-1 space-y-1">
          <CardTitle className="text-base font-semibold leading-snug">{task.title}</CardTitle>
          <Badge variant="outline" className={cn("text-xs", statusStyles[task.status])}>
            {task.status}
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Request Extension</DropdownMenuItem>
            <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {task.description}
        </p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Due {format(deadline, 'MMM d, yyyy')}</span>
        </div>
        <div className="flex items-center justify-between w-full">
            {assignee && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                           <Avatar className="h-8 w-8">
                            <AvatarImage src={assignee.avatarUrl} alt={assignee.name} />
                            <AvatarFallback>{assignee.initials}</AvatarFallback>
                           </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{assignee.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {task.attachments.length > 0 && <Paperclip className="h-4 w-4" />}
                <Clock className="h-4 w-4" />
                <span>{formatDistanceToNow(deadline, { addSuffix: true })}</span>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
