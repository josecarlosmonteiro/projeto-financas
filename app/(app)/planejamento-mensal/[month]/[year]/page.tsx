import { MonthlyPlanning } from "@/app/components/MonthlyPlanning/MonthlyPlanning";
import { NewMonthlyPlanningForm } from "@/app/components/MonthlyPlanning/MonthlyPlanning/NewMonthlyPlanningForm";
import { MonthlyStatement } from "@/app/components/MonthlyPlanning/MonthlyStatement";

interface Props {
  params: {
    month: number;
    year: number;
  }
}

export default function PlanningFixedReleasesPage({ params: { month, year } }: Props) {
  return (
    <main>
      <h1 className="text-2xl font-semibold">Planejamento mensal - {month}/{year}</h1>
      <hr /><br />

      <MonthlyStatement />
      <br />

      <NewMonthlyPlanningForm />
      <br />

      <MonthlyPlanning />
    </main>
  );
}