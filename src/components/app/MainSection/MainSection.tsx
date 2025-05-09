// import { AIComponent } from "../AIComponent/AIComponent"
// import { EditorTabs } from "../EditorComponent/EditorTabs"
import { TabsSectionContainer } from "@/components/app/TabsSectionContainer/TabsSectionContainer"

export const MainSection = () => {
  return (
    <section className="w-full lg:max-w-7xl mx-auto h-auto flex flex-col md:flex-row justify-between py-8 gap-10">
      <TabsSectionContainer />
    </section>
  )
}