"use client"

import { useRouter } from "next/navigation"

export function PolicyArea() {
  const router = useRouter()

  const handleAddPolicy = () => {
    router.push("/add-document?type=policy")
  }

  const handleCreatePolicyUsingAI = () => {
    router.push("/create-policy-ai")
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">HEALTH AND SAFETY POLICY</h2>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2">Introduction</h3>
          <p>
            This policy outlines our commitment to providing a safe and healthy workplace for all staff, contractors,
            and visitors.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Content</h3>
          <p>
            Our clinic is committed to ensuring the health and safety of all persons in our workplace and those affected
            by our operations.
          </p>
          <p className="mt-4">We will achieve this by:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Complying with all relevant health and safety legislation, standards, and codes of practice</li>
            <li>Providing and maintaining safe equipment and systems of work</li>
            <li>Providing information, instruction, training, and supervision to ensure health and safety</li>
            <li>Consulting with staff on matters affecting their health and safety</li>
            <li>Implementing emergency procedures for potential incidents</li>
            <li>Regularly reviewing and improving our health and safety management system</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> This policy was created using AI assistance and should be reviewed by appropriate
            personnel before implementation.
          </p>
        </section>
      </div>
    </div>
  )
}
