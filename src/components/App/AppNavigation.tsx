import { usePathname } from "next/navigation";
import React from "react";
import { ChartNoAxesGantt } from "lucide-react";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import Link from "next/link";

const AppNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="z-50 fixed w-full bg-background/80 backdrop-blur-sm">
      <div className="p-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-8">
          <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
            <h1 className="flex flex-row gap-x-1 items-center text-xl font-bold">
              <ChartNoAxesGantt size={24} strokeWidth={3} /> flow{" "}
              <span className="font-light">demo</span>
            </h1>
          </Link>
          <div className="flex flex-row gap-x-6 items-center">
            <Link
              className={`text-sm text-muted-foreground hover:text-primary transition ${pathname === "/tasks" ? "text-primary" : ""}`}
              href="/tasks"
            >
              Задачи
            </Link>
            <Link
              className={`text-sm text-muted-foreground hover:text-primary transition ${pathname === "/events" ? "text-primary" : ""}`}
              href="/events"
            >
              События
            </Link>
            <Link
              className={`text-sm text-muted-foreground hover:text-primary transition ${pathname === "/about" ? "text-primary" : ""}`}
              href="/about"
            >
              О приложении
            </Link>
          </div>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default AppNavigation;
