import { AIComponent } from "../AIComponent/AIComponent"
import { EditorTabs } from "../EditorComponent/EditorTabs"

export const MainSection = () => {
  return (
    <section className="w-full lg:max-w-7xl mx-auto h-auto flex flex-col md:flex-row justify-between py-8 gap-10">
      <EditorTabs />
      <AIComponent />
    </section>
  )
}