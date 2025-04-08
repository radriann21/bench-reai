"use client";
import { useCodeContext } from "@/context/CodeContext";
import { EmptyState } from "../EmptyState/EmptyState";
import { BenchmarksCard } from "./BenchmarksCard";
import { Play } from "lucide-react";

export const BenchmarksComponent = () => {
  const { results } = useCodeContext()
  const { executionTime, opsPerSecond, memoryUsed } = results

  if (!executionTime || !opsPerSecond || !memoryUsed) {
    return (
      <EmptyState title="No execution yet" description="Run benchmarks to see the performance of your code" icon={<Play />} />
    )
  }

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <BenchmarksCard title="Execution Time" description="The time that the code needs to execute." value={executionTime} />
      <BenchmarksCard title="Operations per second" description="Capability of the code to perform operations per second." value={opsPerSecond} />
      <BenchmarksCard title="Memory used" description="The amount of memory that the code uses." value={memoryUsed} />
    </div>
  )
}
