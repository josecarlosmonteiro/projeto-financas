import { currency } from "@/app/utils/formats";

export function MonthlyStatement() {
  return (
    <div className="flex flex-col gap-2">
      <div>Total de receitas: <span className="text-emerald-500">{currency(2300)}</span></div>
      <div>Total de despesas: <span className="text-red-600">{currency(1300)}</span></div>
    </div>
  )
}