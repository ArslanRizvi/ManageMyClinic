"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { SimpleCKEditor } from "@/components/simple-ckeditor"

export default function AddDocumentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const type = searchParams.get("type") || "best-practice"

  const [documentType, setDocumentType] = useState(type)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const pageTitle = documentType === "best-practice" ? "Add Best Practice" : "Add Policy"

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <div className="bg-teal-400 p-2 rounded mr-2">
                <span className="text-white text-2xl">≡</span>
              </div>
              <div>
                <div className="font-bold text-lg">manage</div>
                <div className="text-sm">myclinic</div>
              </div>
            </Link>

            <nav className="flex items-center space-x-6">
              <Link href="/" className="font-medium">
                Knowledge
              </Link>
              <div className="relative group">
                <button className="flex items-center font-medium">
                  Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center font-medium">
                Host
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center font-medium">
                Amna Khan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <nav className="flex space-x-4 text-sm overflow-x-auto">
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Best Practice
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Templates
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Glossary
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              FAQs
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Links
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Resources
            </Link>
          </nav>
        </div>

        <h1 className="text-2xl font-bold mb-6">{pageTitle}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="document-type" className="block mb-2">
              Document Type <span className="text-red-500">*</span>
            </Label>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger id="document-type" className="w-full">
                <SelectValue placeholder="Select Document Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="best-practice">Best Practice</SelectItem>
                <SelectItem value="policy">Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="author" className="block mb-2">
              Author <span className="text-red-500">*</span>
            </Label>
            <Select defaultValue="amna-khan">
              <SelectTrigger id="author" className="w-full">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="amna-khan">Amna Khan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="title" className="block mb-2">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input id="title" placeholder="Enter policy name" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="mb-6">
          <Label htmlFor="content" className="block mb-2">
            Content <span className="text-red-500">*</span>
          </Label>
          <SimpleCKEditor value={content} onChange={setContent} />
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button className="bg-teal-400 hover:bg-teal-500">Save as Draft</Button>
        </div>
      </div>
    </div>
  )
}
