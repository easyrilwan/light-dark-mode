import ButtonMode from "./components/ButtonMode";
import Testing from "./components/Testing";
import ButtonContextMode from "./context/ButtonContextMode";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-400 dark:bg-stone-400">
        <h1 className="text-3xl font-extrabold dark:text-sky-500">Welcome</h1>

        <div className="space-y-8">
          <Testing />

          {/* Manual Button for Light/Dark Mode */}
          <ButtonMode />

          {/* ContextAPI Button for Light/Dark Mode */}
          <ButtonContextMode />
        </div>
      </div>
    </ThemeProvider>
  );
}
