import { AIComponent } from "../AIComponent/AIComponent"
import { EditorTabs } from "../EditorComponent/EditorTabs"

export const MainSection = () => {
  return (
    <section className="max-w-7xl mx-auto h-auto flex justify-between py-8 gap-10">
      <EditorTabs />
      <AIComponent />
    </section>
  )
}