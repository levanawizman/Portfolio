import { WindowManager } from './components/window/WindowManager';
import { ProjectBoard } from './components/project/ProjectBoard';
import { CommandBar } from './components/command/CommandBar';
import { useInitializeProjects } from './hooks/useInitializeProjects';

function App() {
  useInitializeProjects();

  return (
    <main className="w-full h-full relative overflow-hidden">
      <ProjectBoard />
      <WindowManager />
      <CommandBar />
    </main>
  );
}

export default App;
