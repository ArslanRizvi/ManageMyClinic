"use client"

import { useRouter } from "next/navigation"

export function BestPracticeArea() {
  const router = useRouter()

  const handleAddBestPractice = () => {
    router.push("/add-document?type=best-practice")
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">MANAGEMENT SYSTEM</h2>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2">Introduction</h3>
          <p>
            This section describes the features and key elements of a health and safety management system in a medical
            practice.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Content</h3>
          <p>
            Health and safety practices are essential to maintaining a safe environment for staff and patients in a
            medical practice.
          </p>
          <p className="mt-4">
            In New Zealand, almost all businesses are considered 'persons conducting a business or undertaking' (PCBU);
            this includes medical practices. PCBUs owe legal duties under health and safety law, meaning that there are
            certain obligations that will apply to a medical practice in terms of keeping staff, patients, and others
            safe.
          </p>
          <p className="mt-4">A medical practice should have a health and safety system which:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Identifies hazards and manages risks</li>
            <li>Ensures all staff are properly trained and supervised</li>
            <li>Maintains appropriate records of incidents and near misses</li>
            <li>Has emergency procedures in place</li>
            <li>Regularly reviews and updates health and safety practices</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
