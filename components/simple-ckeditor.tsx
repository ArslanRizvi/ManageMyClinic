"use client"

import { useEffect, useRef } from "react"

interface SimpleCKEditorProps {
  value: string
  onChange: (value: string) => void
}

export function SimpleCKEditor({ value, onChange }: SimpleCKEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a simplified mock of CKEditor
    if (editorRef.current) {
      editorRef.current.innerHTML = `
        <div class="border rounded-md p-4 min-h-[400px]">
          <div class="toolbar flex flex-wrap gap-2 mb-4 border-b pb-2">
            <button class="p-1 hover:bg-gray-100 rounded"><b>B</b></button>
            <button class="p-1 hover:bg-gray-100 rounded"><i>I</i></button>
            <button class="p-1 hover:bg-gray-100 rounded"><u>U</u></button>
            <button class="p-1 hover:bg-gray-100 rounded">Styles</button>
            <button class="p-1 hover:bg-gray-100 rounded">Format</button>
            <button class="p-1 hover:bg-gray-100 rounded">Font</button>
            <button class="p-1 hover:bg-gray-100 rounded">Size</button>
          </div>
          
          <div class="content">
            <h2 class="text-lg font-bold">[Title]</h2>
            
            <h3 class="text-md font-semibold mt-4">Introduction</h3>
            <p class="text-gray-500">[Please write introduction here]</p>
            
            <h3 class="text-md font-semibold mt-4">Content</h3>
            <p class="text-gray-500">[Please write content here]</p>
            
            <h3 class="text-md font-semibold mt-4">Recommended Actions</h3>
            <p class="text-gray-500">[Please list recommended actions here]</p>
            
            <h3 class="text-md font-semibold mt-4">References</h3>
            <p class="text-gray-500">[Please list references here]</p>
          </div>
        </div>
      `
    }
  }, [])

  return <div ref={editorRef}></div>
}
