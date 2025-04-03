import { EditorTabs } from "../EditorComponent/EditorTabs"

export const MainSection = () => {
  return (
    <section className="max-w-6xl mx-auto h-auto flex items-center justify-between py-8">
      <EditorTabs />
    </section>
  )
}