"use client"

import { useState } from "react"
import { Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ResourcesArea() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "Health_and_Safety_Guidelines.pdf", date: "2023-05-15" },
    { id: 2, name: "Infection_Control_Manual.pdf", date: "2023-06-22" },
    { id: 3, name: "Emergency_Response_Procedures.pdf", date: "2023-07-10" },
  ])

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file, index) => ({
        id: uploadedFiles.length + index + 1,
        name: file.name,
        date: new Date().toISOString().split("T")[0],
      }))
      setUploadedFiles([...uploadedFiles, ...newFiles])
    }
  }

  const handleDeleteFile = (id) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Resources</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="border-2 border-dashed rounded-lg p-8 text-center mb-6">
            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="font-medium mb-2">Upload PDF Documents</h3>
            <p className="text-sm text-gray-500 mb-4">Upload PDF documents to use as reference for creating policies</p>
            <div className="relative">
              <Input
                type="file"
                className="hidden"
                id="file-upload"
                accept=".pdf"
                multiple
                onChange={handleFileUpload}
              />
              <Button
                variant="outline"
                className="relative"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Select Files
              </Button>
            </div>
          </div>

          <h3 className="font-medium mb-4">Uploaded Documents</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Document Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Upload Date</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {uploadedFiles.map((file) => (
                  <tr key={file.id}>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{file.date}</td>
                    <td className="px-4 py-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteFile(file.id)} className="text-red-500">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Document Usage</h3>
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-4">
              Documents uploaded here will be available for reference when creating policies using AI. You can select
              which documents to use as reference material during the policy creation process.
            </p>

            <h4 className="font-medium text-sm mb-2">Recently Used In:</h4>
            <ul className="space-y-2">
              <li className="text-sm flex items-center">
                <span className="bg-green-500 text-white text-xs px-1 rounded mr-2">AI</span>
                Health and Safety Policy
              </li>
              <li className="text-sm flex items-center">
                <span className="bg-green-500 text-white text-xs px-1 rounded mr-2">AI</span>
                Infection Control Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
