'use client'

import { useForm } from "react-hook-form";
import { useNewMonthlyPlanning } from "./hooks/useNewMonthlyPlanning"
import { NewMonthlyRelease } from "@/app/types/monthlyPlanning";
import { ControlledInput } from "../../ui/forms/ControlledInput";
import { Button } from "../../ui/Button";

export function NewMonthlyPlanningForm() {
  const { control, handleSubmit, reset } = useForm<NewMonthlyRelease>();
  const { showForm, setShowForm, validateForm } = useNewMonthlyPlanning();

  const toggleView = () => {
    if (showForm) reset();
    setShowForm(state => !state);
  }

  return (
    <div className="flex flex-col gap-4">
      <Button type="button" onClick={toggleView}>
        {!showForm && 'Adicionar lançamento'}
        {showForm && 'Concluir'}
      </Button>

      {
        showForm &&
        <form className="p-4 border shadow-md rounded" onSubmit={handleSubmit(validateForm)}>
          <div className="flex gap-4 items-end">
            <ControlledInput
              control={control}
              name="title"
              type="text"
              placeholder="Título do lançamento..."
              required
            />

            <ControlledInput
              control={control}
              name="value"
              type="number"
              placeholder="R$ 0.000..."
              required
            />

            <ControlledInput
              control={control}
              name="category"
              type="text"
              placeholder="Categoria..."
              required
            />
          </div>

          <div className="mt-4 flex gap-10 items-center">
            <div className="flex gap-2 items-center">
              <ControlledInput
                id="releaseRevenueType"
                control={control}
                type="radio"
                name="type"
                value="revenue"
                required
              />

              <label htmlFor="releaseRevenueType">Receita</label>
            </div>

            <div className="flex gap-2 items-center">
              <ControlledInput
                id="releaseExpenseType"
                control={control}
                type="radio"
                name="type"
                value="expense"
                required
              />

              <label htmlFor="releaseExpenseType">Despesa</label>
            </div>
          </div>
          <br />

          <Button type="submit" className="p-2 px-4 border rounded bg-slate-100">Adicionar</Button>
        </form>
      }
    </div>
  )
}