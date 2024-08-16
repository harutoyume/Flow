import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChartNoAxesGantt, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/Theme/ModeToggle";

const AppNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="z-50 fixed w-full bg-background/80 backdrop-blur-sm">
      <div className="p-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-10 max-sm:hidden">
          <Link href="/">
            <h1 className="flex flex-row gap-x-1 items-center text-xl font-bold">
              <ChartNoAxesGantt size={24} strokeWidth={3} /> flow{" "}
              <span className="font-light">demo</span>
            </h1>
          </Link>
          <div className="flex flex-row gap-x-8 items-center">
            <Link
              className={`text-sm text-muted-foreground hover:text-primary transition ${pathname === "/notes" ? "text-primary" : ""}`}
              href="/notes"
            >
              Заметки
            </Link>
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
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <h1 className="flex flex-row gap-x-1 items-center text-xl font-bold">
                    <ChartNoAxesGantt size={24} strokeWidth={3} /> flow{" "}
                    <span className="font-light">demo</span>
                  </h1>
                </Link>
              </SheetTitle>
              <SheetDescription>
                <div className="p-4 flex flex-col gap-y-6 text-left">
                  <Link
                    className={`text-sm text-muted-foreground hover:text-primary transition ${pathname === "/notes" ? "text-primary" : ""}`}
                    href="/notes"
                  >
                    Заметки
                  </Link>
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default AppNavigation;
