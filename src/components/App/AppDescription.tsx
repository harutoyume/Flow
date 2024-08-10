import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const AppDescription = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>О приложении</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Flow (Поток) — это простое приложение для организации заметок, задач и
          событий.
        </p>
      </CardContent>
      <CardFooter>
        <Link href="https://github.com/harutoyume/Flow">
          <Button variant="link" className="pl-0 flex gap-x-1">
            <Github size={20} />
            GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AppDescription;
