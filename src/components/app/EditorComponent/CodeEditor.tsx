"use client";
import Editor from "@monaco-editor/react";
import { useCodeContext } from "@/context/CodeContext";

export const CodeEditor = () => {

  const { code, setCode } = useCodeContext();

  return (
    <>
      <Editor
        height={400}
        language="javascript"
        onChange={(value) => setCode(value || "")}
        defaultValue={code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 12,
          scrollBeyondLastLine: false,
          padding: { top: 10, bottom: 10 },
          lineNumbers: "off",
        }}
      />
    </>
  );
};
