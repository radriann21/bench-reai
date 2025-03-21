"use client";

import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { useCodeContext } from "@/context/CodeContext";

export const BenchmarksComponent = () => {
  const { results } = useCodeContext()
  const { executionTime, opsPerSecond, memoryUsed } = results

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
              <span className="font-headings font-bold block">{executionTime || 'no execution yet'}</span>
              <span className="font-body text-secondary-text text-sm">Time in miliseconds</span>
            </div>
          </article>
          <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full">
            <h3 className="font-headings text-sm font-semibold mb-4">N° Operations</h3>
            <div>
              <span className="font-headings font-bold block">{opsPerSecond || 'no execution yet'}</span>
              <span className="font-body text-secondary-text text-sm">Operations per second</span>
            </div>
          </article>
          <article className="p-4 rounded-md border-1 border-custom-border text-main-text w-full">
            <h3 className="font-headings text-sm font-semibold mb-4">Memory Usage</h3>
            <div>
              <span className="font-headings font-bold block">{memoryUsed || 'no execution yet'}</span>
              <span className="font-body text-secondary-text text-sm">Total Heap Used</span>
            </div>
          </article>
        </div>
      </CardContent>
    </Card>
  )
}