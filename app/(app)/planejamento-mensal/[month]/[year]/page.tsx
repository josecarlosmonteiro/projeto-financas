import { SideNav } from "@/app/components/ui/SideNav";

type Props = {
  params: {
    month: number;
    year: number;
  }
}

export default function PlanningFixedReleasesPage({ params: { month, year } }: Props) {
  return (
    <main className="flex">
      <SideNav />

      <div className="p-4">
        <div>
          <strong>{month}/{year}</strong>
        </div>

        fixed releases page...
      </div>
    </main>
  );
}