import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Initialize dark mode immediately on load
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme');
  if (saved !== 'light') {
    document.documentElement.classList.add('dark');
  }
}

const ThemeColorSwitcher = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved !== 'light'; // Default to dark unless explicitly set to light
    }
    return true;
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
