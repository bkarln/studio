import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckSquare } from 'lucide-react';

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm fixed top-0 w-full z-10">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CheckSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold font-headline">TaskFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link href="/login" prefetch={false}>
              Sign In
            </Link>
          </Button>
          <Button asChild>
            <Link href="/register" prefetch={false}>
              Get Started
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-24 md:pt-32 lg:pt-40">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                  Streamline Your Workflow, Achieve More
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  TaskFlow helps you manage projects, track progress, and collaborate with your team effortlessly. Say goodbye to chaos and hello to productivity.
                </p>
                <div className="space-x-4">
                  <Button asChild size="lg">
                    <Link href="/register" prefetch={false}>
                      Get Started for Free
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    width="600"
                    height="400"
                    alt="Hero"
                    data-ai-hint={heroImage.imageHint}
                    className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 mt-12">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Features Built for High-Performing Teams</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From task management to seamless collaboration, TaskFlow provides all the tools your team needs to succeed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Organization Management</h3>
                <p className="text-sm text-muted-foreground">
                  Create and manage multiple organizations, assign roles, and control permissions with ease.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Advanced Task Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track tasks from creation to completion with custom statuses, deadlines, and attachments.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Group Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Organize users into groups for efficient task assignment and communication.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Deadline Extensions</h3>
                <p className="text-sm text-muted-foreground">
                  A clear workflow for requesting and approving task deadline extensions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Progress Logging</h3>
                <p className="text-sm text-muted-foreground">
                  Keep a detailed history of all activities and updates for every task.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Stay informed with automated email and WhatsApp notifications for important updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 TaskFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
