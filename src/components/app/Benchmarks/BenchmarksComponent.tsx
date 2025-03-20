import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";

export const BenchmarksComponent = () => {
  return (
    <Card className="bg-bg-card border-1 border-custom-border text-main-text col-span-1 row-span-1">
      <CardHeader>
        <CardTitle className="font-headings text-lg">
          Benchmarks
        </CardTitle>
        <CardDescription className="font-body text-secondary-text">
          Run your code to see the benchmarks results
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex items-center justify-between gap-4">
          <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full">
            <h3 className="font-headings text-sm font-semibold mb-4">Execution Time</h3>
            <div>
              <span className="font-headings text-lg font-bold block">156ms</span>
              <span className="font-body text-secondary-text text-sm">Average of 5 runs</span>
            </div>
          </article>
          <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full">
            <h3 className="font-headings text-sm font-semibold mb-4">Memory Usage</h3>
            <div>
              <span className="font-headings text-lg font-bold block">45MB</span>
              <span className="font-body text-secondary-text text-sm">Peak heap usage</span>
            </div>
          </article>
          <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full">
            <h3 className="font-headings text-sm font-semibold mb-4">CPU Usage</h3>
            <div>
              <span className="font-headings text-lg font-bold block">23%</span>
              <span className="font-body text-secondary-text text-sm">Average CPU load</span>
            </div>
          </article>
        </div>
      </CardContent>
    </Card>
  )
}