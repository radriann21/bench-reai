"use client";
import Editor from "@monaco-editor/react";

export const CodeEditor = () => {
  return (
    <>
      <Editor
        height={400}
        language="javascript"
        defaultValue="console.log('Hello World');"
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
