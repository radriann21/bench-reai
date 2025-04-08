export const BenchmarksCard = ({ title, value, description }: { title: string, value: string, description: string }) => {
  return (
    <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full bg-[#0d131f]">
    <h3 className="font-headings text-sm font-semibold mb-4">{title}</h3>
    <div>
      <span className="font-headings font-bold block">{value || 'no execution yet'}</span>
      <span className="font-body text-secondary-text text-sm">{description}</span>
    </div>
  </article>
  )
}