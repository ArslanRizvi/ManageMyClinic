"use client"

import { useState } from "react"
import { MoreVertical, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface SectionsSidebarProps {
  type: "best-practice" | "policy"
}

export function SectionsSidebar({ type }: SectionsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Sample items data (best practices or policies)
  const items =
    type === "best-practice"
      ? [
          { id: 1, name: "Health and Safety Overview", section: "Management System" },
          { id: 2, name: "Risk Assessment Process", section: "Management System" },
          { id: 3, name: "Staff Training Requirements", section: "Training" },
          { id: 4, name: "New Staff Orientation", section: "Training" },
          { id: 5, name: "Patient Lifting Guidelines", section: "Manual Handling" },
        ]
      : [
          { id: 1, name: "Health and Safety Policy", section: "Management System", isAI: true },
          { id: 2, name: "Infection Control Policy", section: "Management System", isAI: true },
          { id: 3, name: "Privacy Policy", section: "Management System", isAI: false },
          { id: 4, name: "Emergency Response Policy", section: "Incident Management", isAI: false },
          { id: 5, name: "Staff Training Policy", section: "Training", isAI: false },
        ]

  const handleDeleteItem = (id: number) => {
    alert(`Delete ${type === "best-practice" ? "best practice" : "policy"} with ID: ${id}`)
  }

  const handleExportPDF = (id: number) => {
    alert(`Export ${type === "best-practice" ? "best practice" : "policy"} with ID: ${id} as PDF`)
  }

  const handleAddBestPractice = () => {
    router.push("/add-document?type=best-practice")
  }

  const handleAddPolicy = () => {
    router.push("/add-document?type=policy")
  }

  const handleCreatePolicyUsingAI = () => {
    router.push("/create-policy-ai")
  }

  const filteredItems = searchQuery
    ? items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  return (
    <div className="w-full md:w-1/4 pr-0 md:pr-4 mb-4 md:mb-0">
      <div className="mb-4 flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 mr-2 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {type === "best-practice" ? (
              <DropdownMenuItem onClick={handleAddBestPractice}>Add Best Practice</DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem onClick={handleAddPolicy}>Add Policy</DropdownMenuItem>
                <DropdownMenuItem onClick={handleCreatePolicyUsingAI}>Create Policy Using AI</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <h2 className="text-lg font-medium">{type === "best-practice" ? "Best Practices" : "Policies"}</h2>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={`Search ${type === "best-practice" ? "best practices" : "policies"}...`}
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex items-center p-2 hover:bg-gray-100 rounded">
            <Button variant="ghost" size="icon" className="h-8 w-8 mr-2 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
            <div className="flex items-center">
              {type === "policy" && "isAI" in item && item.isAI && (
                <span className="bg-green-500 text-white text-xs px-1 rounded mr-2">AI</span>
              )}
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
