'use client'

import { NewMonthlyRelease } from "@/app/types/monthlyPlanning";
import { useState } from "react"

export function useNewMonthlyPlanning() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const validateForm = (data: NewMonthlyRelease) => {
    console.log("🚀 ~ validateForm ~ data:", data)
  }

  return {
    showForm,
    setShowForm,
    validateForm,
  }
}