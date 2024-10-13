export interface ColumnProps<T> {
  accessKey: keyof T;
  label: string;
}

interface Props<T> {
  data: T[];
  columns: Array<ColumnProps<T>>;
}

export function Table<T>({ data = [], columns = [] }: Props<T>) {
  return (
    <table className="w-full text-center">
      <thead className="bg-slate-600 text-white">
        <tr>
          {
            columns.map((col, index) => (
              <th key={index}>
                {col.label}
              </th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          data.map((row, rowIndex) => (
            <tr key={`row_${rowIndex}`} className="border-b">
              {
                columns.map((col, colIndex) => (
                  <td key={`col_${rowIndex}_${colIndex}`}>
                    {row[col.accessKey] as string}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}