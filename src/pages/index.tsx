import Link from 'next/link';
import { ModeToggle } from "@/components/ModeToggle";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartNoAxesGantt } from 'lucide-react';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="p-4 text-primary">
        <nav className="pb-2 flex justify-between">
            <h1 className="flex flex-row gap-x-2 items-center text-xl font-bold"><ChartNoAxesGantt size={24} strokeWidth={2}/> flow</h1>
            <ModeToggle/>
        </nav>

        <header className="pt-2">
            <Card>
                <CardHeader>
                    <CardTitle>About app</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Flow is an application for organizing notes, tasks, and events.</p>
                </CardContent>
                <CardFooter>
                    <Link href="https://github.com/harutoyume/Flow">
                        <Button variant="link" className="pl-0 flex gap-x-1"><Github size={20}/>Github</Button>
                    </Link>
                </CardFooter>
            </Card>
        </header>
    </main>
  );
}
