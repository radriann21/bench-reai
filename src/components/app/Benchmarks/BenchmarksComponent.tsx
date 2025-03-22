"use client";

import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { useCodeContext } from "@/context/CodeContext";
import { BenchmarksCard } from "./BenchmarksCard";

export const BenchmarksComponent = () => {
  const { results } = useCodeContext()
  const { executionTime, opsPerSecond, memoryUsed } = results

  return (
    <Card className="bg-bg-card border-1 border-custom-border text-main-text col-span-1 row-span-2">
      <CardHeader>
        <CardTitle className="font-headings text-lg">
          Benchmarks
        </CardTitle>
        <CardDescription className="font-body text-secondary-text">
          Run your code to see the benchmarks results
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="w-full flex items-center justify-between gap-4">
          <BenchmarksCard 
            title="Execution Time"
            value={executionTime || 'no execution yet'}
            description="Time in miliseconds"
          />
          <BenchmarksCard 
            title="N° Operations"
            value={opsPerSecond || 'no execution yet'}
            description="Operations per second"
          />
          <BenchmarksCard 
            title="Memory Usage"
            value={memoryUsed || 'no execution yet'}
            description="Total Heap Used"
          />
        </div>
        <div className="mt-2 w-full h-full">
          <h3 className="font-headings text-sm font-semibold mb-4">Output</h3>
          <div className="rounded-md border-1 border-custom-border bg-slate-900 h-[220px] p-4 overflow-y-scroll">
            <pre>
              <code>{results.output || 'no execution yet'}</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}