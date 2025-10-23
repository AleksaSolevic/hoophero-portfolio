import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeColorSwitcher = () => {
  const themes = [
    { name: "Orange", primary: "18 85% 55%", glow: "18 90% 65%" },
    { name: "Blue", primary: "217 91% 60%", glow: "217 91% 70%" },
    { name: "Purple", primary: "271 81% 56%", glow: "271 81% 66%" },
    { name: "Green", primary: "142 71% 45%", glow: "142 71% 55%" },
    { name: "Red", primary: "0 84% 60%", glow: "0 84% 70%" },
  ];

  const changeTheme = (primary: string, glow: string) => {
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--primary-glow", glow);
    document.documentElement.style.setProperty("--ring", primary);
    
    // Update gradients
    const primaryHsl = `hsl(${primary})`;
    const glowHsl = `hsl(${glow})`;
    document.documentElement.style.setProperty(
      "--gradient-primary",
      `linear-gradient(135deg, ${primaryHsl}, ${glowHsl})`
    );
    document.documentElement.style.setProperty(
      "--shadow-elegant",
      `0 10px 40px -10px hsl(${primary} / 0.3)`
    );
    document.documentElement.style.setProperty(
      "--shadow-glow",
      `0 0 50px hsl(${glow} / 0.4)`
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change theme color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => changeTheme(theme.primary, theme.glow)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `hsl(${theme.primary})` }}
              />
              {theme.name}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeColorSwitcher;
