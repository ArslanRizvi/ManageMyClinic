import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KnowledgeHeader } from "@/components/knowledge-header"
import { BestPracticeArea } from "@/components/best-practice-area"
import { PolicyArea } from "@/components/policy-area"
import { ResourcesArea } from "@/components/resources-area"
import { SectionsSidebar } from "@/components/sections-sidebar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <KnowledgeHeader />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Health and Safety</h1>

        <Tabs defaultValue="best-practice" className="w-full">
          <TabsList className="mb-4 border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="best-practice"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Best Practice
            </TabsTrigger>
            <TabsTrigger
              value="our-policies"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Our Policies
            </TabsTrigger>
            <TabsTrigger
              value="our-procedures"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Our Procedures
            </TabsTrigger>
            <TabsTrigger
              value="standing-order"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Standing Order
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Templates
            </TabsTrigger>
            <TabsTrigger
              value="glossary"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Glossary
            </TabsTrigger>
            <TabsTrigger
              value="faqs"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              FAQs
            </TabsTrigger>
            <TabsTrigger
              value="links"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Links
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-500 px-4 py-2 data-[state=active]:shadow-none bg-transparent"
            >
              Resources
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row">
            <TabsContent value="best-practice" className="mt-0 w-full">
              <div className="flex flex-col md:flex-row">
                <SectionsSidebar type="best-practice" />
                <div className="w-full md:w-3/4">
                  <BestPracticeArea />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="our-policies" className="mt-0 w-full">
              <div className="flex flex-col md:flex-row">
                <SectionsSidebar type="policy" />
                <div className="w-full md:w-3/4">
                  <PolicyArea />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="our-procedures" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">Our Procedures</h2>
              <p>Procedures content will appear here.</p>
            </TabsContent>

            <TabsContent value="standing-order" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">Standing Order</h2>
              <p>Standing order content will appear here.</p>
            </TabsContent>

            <TabsContent value="templates" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">Templates</h2>
              <p>Templates content will appear here.</p>
            </TabsContent>

            <TabsContent value="glossary" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">Glossary</h2>
              <p>Glossary content will appear here.</p>
            </TabsContent>

            <TabsContent value="faqs" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">FAQs</h2>
              <p>FAQs content will appear here.</p>
            </TabsContent>

            <TabsContent value="links" className="mt-0 w-full">
              <h2 className="text-xl font-bold mb-4">Links</h2>
              <p>Links content will appear here.</p>
            </TabsContent>

            <TabsContent value="resources" className="mt-0 w-full">
              <ResourcesArea />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
