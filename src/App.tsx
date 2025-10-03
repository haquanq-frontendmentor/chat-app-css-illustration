import { ChatApp } from "./components/ChatApp/ChatApp";
import { Intro } from "./components/Intro";

function App() {
  return (
    <main class="min-h-screen bg-gray-100 p-7 flex items-center justify-center md:pt-[1.8125rem] relative overflow-hidden">
      <div class="max-w-[58.125rem] relative flex flex-col items-center gap-16 md:flex-row md:gap-[clamp(4rem,-0.6329rem+9.6519vw,7.8125rem)]">
        <div class="absolute rounded-b-full [background:var(--gradient-purple-180)] w-[31.875rem] h-screen bottom-[22.625rem] md:bottom-[-2.9375rem] left-[clamp(-21.5625rem,-18.7533rem+-5.8524vw,-20.125rem)] z-10"></div>
        <div class="absolute rounded-t-full bg-purple-100 opacity-45 w-[31.875rem] h-screen top-[22.625rem] md:top-[-1.75rem] right-[clamp(-27.5rem,-13.0878rem+-30.0254vw,-20.125rem)] z-10 "></div>
        <div class="md:pl-[clamp(2rem,-3.7722rem+12.0253vw,6.75rem)] relative z-50">
          <ChatApp />
        </div>
        <Intro />
      </div>
    </main>
  );
}

export default App;
