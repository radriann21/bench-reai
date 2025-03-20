import { EditorComponent } from "@/components/app/EditorComponent/EditorComponent";
import { BenchmarksComponent } from "@/components/app/Benchmarks/BenchmarksComponent";

export default function Home() {
  return (
    <main className="max-w-full min-h-screen bg-main-bg text-main-text">
      <header className="max-w-full p-8 flex items-center justify-between border-b-1 border-custom-border">
        <h1 className="font-headings text-3xl text-main-text">BenchReAI</h1>
      </header>
      <section className="max-w-full h-auto p-12 grid grid-cols-2 grid-rows-2 gap-4">
        <EditorComponent />
        <BenchmarksComponent />
      </section>
    </main>
  );
}
