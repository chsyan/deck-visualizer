import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleBaseMap } from "@/components/google-map";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleBaseMap />
    </ThemeProvider>
  );
}

export default App;
