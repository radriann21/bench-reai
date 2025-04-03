export const EmptyState = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <section className="font-body w-full h-full">
      <div className="flex items-start space-x-4 justify-start flex-col space-y-2">
        {icon}
        <div>
          <h3 className="font-headings text-xl text-main-text">{title}</h3>
          <p className="text-secondary-text">{description}</p>
        </div>
      </div>
    </section>
  )
}