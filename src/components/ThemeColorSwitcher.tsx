import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeColorSwitcher = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if user has a preference saved, otherwise default to dark
      const saved = localStorage.getItem('theme');
      if (saved === 'light') {
        return false;
      }
      // Default to dark mode
      return true;
    }
    return true; // Default to dark
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative">
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeColorSwitcher;
