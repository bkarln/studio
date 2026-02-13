import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium font-headline">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>This is how others will see you on the site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Alice Johnson" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="alice@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="+1 234 567 890" />
                    </div>
                     <Button>Update Profile</Button>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
              <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Manage your account settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                   <div className="space-y-2">
                      <Label>Change Password</Label>
                      <Input type="password" placeholder="Current Password" />
                      <Input type="password" placeholder="New Password" />
                      <Input type="password" placeholder="Confirm New Password" />
                   </div>
                   <Button>Update Password</Button>
                   <Separator />
                    <div>
                      <h4 className="text-sm font-medium">Danger Zone</h4>
                       <p className="text-sm text-muted-foreground">Once you delete your account, there is no going back. Please be certain.</p>
                       <Button variant="destructive" className="mt-2">Delete Account</Button>
                    </div>
              </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
              <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the look and feel of the app.</CardDescription>
              </CardHeader>
              <CardContent>
                  <p>Theme settings coming soon.</p>
              </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
