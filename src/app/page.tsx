import { MainSection } from "@/components/app/MainSection/MainSection";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Toaster />
      <main className="max-w-full min-h-screen bg-main-bg text-main-text">
        <header className="max-w-full p-6 flex items-center justify-between border-b-1 border-custom-border">
          <h1 className="font-headings text-2xl text-main-text">BenchReAI</h1>
        </header>
        <MainSection />
      </main>
    </>
  );
}
