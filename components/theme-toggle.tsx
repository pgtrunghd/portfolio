import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2 rounded-full"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Sun className="!size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <Moon className="!size-[1.2rem] hidden text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
