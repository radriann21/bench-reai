'use server';

import { createContext, runInContext } from "vm";
import type { ExecuteCodeResult } from "@/types";

export async function executeCode(code: string): Promise<ExecuteCodeResult> {
  try {
    let output = '';
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (...args) => {
      output += `${args.join(' ')}\n`;
    };
    console.error = (...args) => {
      output += `[ERROR] ${args.join(' ')}\n`;
    };

    const sandbox = { console }
    const context = createContext(sandbox)

    // execution time
    const start = performance.now()
    runInContext(`
      try {
        ${code};
      } catch(err) {
        console.error(err);
      }
    `, context, { timeout: 1000 })

    const end = performance.now()
    const executionTime = end - start

    
    // per second operations
    const iterations = 1000
    const opsStart = performance.now()
    console.log = ()  => {}
    for (let i = 0; i < iterations; i++) {
      runInContext(`
        try {
          ${code};
        } catch (error) {}
      `, context, { timeout: 1000 });
    }
    const opsEnd = performance.now();
    const totalTime = opsEnd - opsStart;
    const opsPerSecond = (iterations / totalTime) * 1000;


    // memory usage
    const memoryBefore = process.memoryUsage().heapUsed
    runInContext(`
      try {
        ${code};
      } catch(err) {
        console.error(err);
      }
    `, context, { timeout: 1000 })
    const memoryAfter = process.memoryUsage().heapUsed
    const memoryUsed = memoryAfter - memoryBefore

    // restore original console functions
    console.log = originalConsoleLog;
    console.error = originalConsoleError;

    // formatted outputs
    const formattedExecutionTime = `${executionTime.toFixed(2)} ms`;
    const formattedOpsPerSecond = `${opsPerSecond.toFixed(2)} ops/s`;
    const formattedMemoryUsed = `${(memoryUsed / 1024).toFixed(2)} KB`;

    return {
      success: true,
      executionTime: formattedExecutionTime,
      opsPerSecond: formattedOpsPerSecond,
      memoryUsed: formattedMemoryUsed,
      output,
    }

  } catch(err) {
    if (err instanceof Error) {
      return { success: false, error: err.message }
    }
  }

  return { success: false, error: 'Unknown error' }
}