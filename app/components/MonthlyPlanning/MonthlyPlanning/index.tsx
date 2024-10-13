import { MonthlyRelease } from "@/app/types/monthlyPlanning";
import { ColumnProps, Table } from "../../ui/data/Table";

const columns: Array<ColumnProps<MonthlyRelease>> = [
  { accessKey: 'id', label: '#ID' },
  { accessKey: 'title', label: 'Título' },
  { accessKey: 'category', label: 'Categoria' },
  { accessKey: 'value', label: 'Valor ($)' },
];

const MONTHLY_DATA: Array<MonthlyRelease> = [
  { id: '1', title: 'Aluguel', category: 'moradia', value: 700, type: "expense" },
  { id: '2', title: 'água', category: 'moradia', value: 90, type: "expense" },
  { id: '3', title: 'energia', category: 'moradia', value: 200, type: "expense" },
  { id: '4', title: 'Salário', category: 'salário', value: 3000, type: "revenue" },
];

export function MonthlyPlanning() {
  return (
    <section>
      <h2 className="text-xl">Lançamentos Mensais</h2>
      <hr /><br />

      <Table columns={columns} data={MONTHLY_DATA} />
    </section>
  )
}