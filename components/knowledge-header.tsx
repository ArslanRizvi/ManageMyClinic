"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function KnowledgeHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8 mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <div className="bg-teal-400 p-2 rounded mr-2">
              <span className="text-white text-2xl">≡</span>
            </div>
            <div>
              <div className="font-bold text-lg">manage</div>
              <div className="text-sm">myclinic</div>
            </div>
          </Link>

          <nav className="flex items-center space-x-4 md:space-x-6">
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
            <div className="relative group">
              <button className="flex items-center font-medium">
                Favorites
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

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Search knowledge..." className="pl-10 w-full md:w-[300px] rounded-full" />
          </div>
          <Button className="bg-teal-400 hover:bg-teal-500 w-full md:w-auto">Advanced Search</Button>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center font-medium">
                Ali Medical
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
                Zia
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
      </div>
    </header>
  )
}
