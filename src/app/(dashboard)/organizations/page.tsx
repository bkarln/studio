import { PlusCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { organizations, users } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function OrganizationsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-headline">Organizations</h1>
          <p className="text-muted-foreground">
            Manage your teams and collaborations.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Organization
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => {
            const members = org.memberIds.map(id => users.find(u => u.id === id)).filter(Boolean) as (typeof users[0])[];
            return (
                <Card key={org.id} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            <span>{org.name}</span>
                        </CardTitle>
                        <CardDescription>{members.length} members</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="flex -space-x-2 overflow-hidden">
                        <TooltipProvider>
                            {members.slice(0, 5).map(member => (
                                <Tooltip key={member.id}>
                                    <TooltipTrigger asChild>
                                        <Avatar className="inline-block border-2 border-background h-10 w-10">
                                            <AvatarImage src={member.avatarUrl} />
                                            <AvatarFallback>{member.initials}</AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>{member.name}</TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                        {members.length > 5 && (
                             <Avatar className="inline-block border-2 border-background h-10 w-10">
                                <AvatarFallback>+{members.length - 5}</AvatarFallback>
                            </Avatar>
                        )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Manage</Button>
                    </CardFooter>
                </Card>
            )
        })}
      </div>
    </div>
  );
}
