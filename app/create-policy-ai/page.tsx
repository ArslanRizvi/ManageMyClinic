"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Send, Plus, X } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePolicyAIPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI assistant. I can help you create a policy based on your selected documents or existing best practices. What type of policy would you like to create today?",
    },
  ])

  const [input, setInput] = useState("")
  const [selectedDocuments, setSelectedDocuments] = useState([])
  const [selectedPractices, setSelectedPractices] = useState([])
  const [aiModel, setAiModel] = useState("gpt-4")

  // Refs for resizable panels
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)
  const leftResizeRef = useRef(null)
  const rightResizeRef = useRef(null)

  // Initialize resizable panels
  useEffect(() => {
    const leftPanel = leftPanelRef.current
    const rightPanel = rightPanelRef.current
    const leftResize = leftResizeRef.current
    const rightResize = rightResizeRef.current

    if (!leftPanel || !rightPanel || !leftResize || !rightResize) return

    let leftStartX, leftStartWidth, rightStartX, rightStartWidth

    function leftStartResizing(e) {
      leftStartX = e.clientX
      leftStartWidth = Number.parseInt(document.defaultView.getComputedStyle(leftPanel).width, 10)
      document.addEventListener("mousemove", leftDoResizing)
      document.addEventListener("mouseup", leftStopResizing)
    }

    function leftDoResizing(e) {
      const width = leftStartWidth + e.clientX - leftStartX
      if (width > 200 && width < 600) {
        leftPanel.style.width = `${width}px`
      }
    }

    function leftStopResizing() {
      document.removeEventListener("mousemove", leftDoResizing)
      document.removeEventListener("mouseup", leftStopResizing)
    }

    function rightStartResizing(e) {
      rightStartX = e.clientX
      rightStartWidth = Number.parseInt(document.defaultView.getComputedStyle(rightPanel).width, 10)
      document.addEventListener("mousemove", rightDoResizing)
      document.addEventListener("mouseup", rightStopResizing)
    }

    function rightDoResizing(e) {
      const width = rightStartWidth - (e.clientX - rightStartX)
      if (width > 200 && width < 600) {
        rightPanel.style.width = `${width}px`
      }
    }

    function rightStopResizing() {
      document.removeEventListener("mousemove", rightDoResizing)
      document.removeEventListener("mouseup", rightStopResizing)
    }

    leftResize.addEventListener("mousedown", leftStartResizing)
    rightResize.addEventListener("mousedown", rightStartResizing)

    return () => {
      leftResize.removeEventListener("mousedown", leftStartResizing)
      rightResize.removeEventListener("mousedown", rightStartResizing)
    }
  }, [])

  const handleSendMessage = () => {
    if (!input.trim()) return

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "I'm analyzing your request to create a policy. Based on the information provided, I'll generate a draft policy that you can review and edit.",
      },
    ]

    setMessages(newMessages)
    setInput("")
  }

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hello! I'm your AI assistant. I can help you create a policy based on your selected documents or existing best practices. What type of policy would you like to create today?",
      },
    ])
    setSelectedDocuments([])
    setSelectedPractices([])
  }

  // Sample documents data (would come from Resources tab in real app)
  const documents = [
    { id: 1, name: "Health_and_Safety_Guidelines.pdf" },
    { id: 2, name: "Infection_Control_Manual.pdf" },
    { id: 3, name: "Emergency_Response_Procedures.pdf" },
  ]

  const bestPractices = [
    { id: 1, name: "Health and Safety Management" },
    { id: 2, name: "Infection Control" },
    { id: 3, name: "Patient Privacy" },
    { id: 4, name: "Emergency Procedures" },
    { id: 5, name: "Staff Training Requirements" },
  ]

  const toggleDocument = (id) => {
    if (selectedDocuments.includes(id)) {
      setSelectedDocuments(selectedDocuments.filter((docId) => docId !== id))
    } else {
      setSelectedDocuments([...selectedDocuments, id])
    }
  }

  const togglePractice = (id) => {
    if (selectedPractices.includes(id)) {
      setSelectedPractices(selectedPractices.filter((practiceId) => practiceId !== id))
    } else {
      setSelectedPractices([...selectedPractices, id])
    }
  }

  const handleCreatePolicy = () => {
    // Simulate policy creation
    setMessages([
      ...messages,
      {
        role: "assistant",
        content:
          "I've created a draft policy based on your requirements and the selected references. You can now review and edit it before finalizing.",
      },
    ])

    // Add a button to view the created policy
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Your AI-generated policy has been created successfully! It will appear in your policies list with an AI indicator.",
        },
      ])
    }, 1500)
  }

  // Sample chat history data
  const chatHistory = [
    { id: 1, name: "Health and Safety Policy", date: "2023-05-20" },
    { id: 2, name: "Infection Control Policy", date: "2023-06-15" },
    { id: 3, name: "Privacy Policy", date: "2023-07-10" },
    { id: 4, name: "Emergency Response Policy", date: "2023-08-05" },
  ]

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
        </div>
      </header>

      <div className="container mx-auto p-4 flex-1 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Create Policy Using AI</h1>

        <div className="flex flex-1 gap-0">
          {/* Left panel - resizable */}
          <div ref={leftPanelRef} className="w-[300px] border rounded-l-lg overflow-hidden">
            <Tabs defaultValue="documents" className="h-full flex flex-col">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
              </TabsList>

              <TabsContent value="documents" className="p-4 overflow-auto flex-1">
                <div>
                  <h3 className="font-medium mb-2">Select Documents</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Choose documents to use as reference for creating your policy
                  </p>

                  <div className="space-y-2">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className={`p-3 rounded-lg border cursor-pointer ${
                          selectedDocuments.includes(doc.id) ? "bg-teal-50 border-teal-300" : "hover:bg-gray-50"
                        }`}
                        onClick={() => toggleDocument(doc.id)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-sm mr-3 ${
                              selectedDocuments.includes(doc.id) ? "bg-teal-500" : "border border-gray-300"
                            }`}
                          >
                            {selectedDocuments.includes(doc.id) && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-gray-500 mr-2" />
                            <span>{doc.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="best-practices" className="p-4 overflow-auto flex-1">
                <div>
                  <h3 className="font-medium mb-2">Select Best Practices</h3>
                  <p className="text-sm text-gray-500 mb-4">Choose existing best practices to use as reference</p>

                  <div className="space-y-2">
                    {bestPractices.map((practice) => (
                      <div
                        key={practice.id}
                        className={`p-3 rounded-lg border cursor-pointer ${
                          selectedPractices.includes(practice.id) ? "bg-teal-50 border-teal-300" : "hover:bg-gray-50"
                        }`}
                        onClick={() => togglePractice(practice.id)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-sm mr-3 ${
                              selectedPractices.includes(practice.id) ? "bg-teal-500" : "border border-gray-300"
                            }`}
                          >
                            {selectedPractices.includes(practice.id) && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                          <span>{practice.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Resize handle */}
            <div
              ref={leftResizeRef}
              className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-teal-400 opacity-0 hover:opacity-100"
              style={{ right: "-1px", zIndex: 10 }}
            />
          </div>

          {/* Middle panel - chat */}
          <div className="flex-1 border-t border-b">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between border-b p-3">
                <div className="flex items-center">
                  <h3 className="font-medium">AI Chat</h3>
                  <Button variant="ghost" size="sm" className="ml-2" onClick={handleNewChat}>
                    <Plus className="h-4 w-4 mr-1" />
                    New Chat
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={aiModel} onValueChange={setAiModel}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select AI Model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                      <SelectItem value="claude">Claude</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-auto">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user" ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask a question or provide details about the policy you want to create..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <Button className="bg-teal-500 hover:bg-teal-600" size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Button className="bg-green-500 hover:bg-green-600" onClick={handleCreatePolicy}>
                    Generate Policy
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - history (resizable) */}
          <div ref={rightPanelRef} className="w-[250px] border rounded-r-lg relative">
            {/* Resize handle */}
            <div
              ref={rightResizeRef}
              className="absolute top-0 left-0 w-1 h-full cursor-col-resize hover:bg-teal-400 opacity-0 hover:opacity-100"
              style={{ left: "-1px", zIndex: 10 }}
            />

            <div className="p-4 h-full overflow-auto">
              <h3 className="font-medium mb-3">Generated Policy History</h3>
              <div className="space-y-2">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white text-xs px-1 rounded mr-2">AI</span>
                      <span className="text-sm">{chat.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{chat.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
