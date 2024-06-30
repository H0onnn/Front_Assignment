import { useState } from "react"
import { Column } from "types/column"
import { initialColumns } from "mock/dummy"

export const useColumns = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns)

  const updateColumns = (newColumns: Column[]) => {
    setColumns(newColumns)
  }

  return {
    columns,
    updateColumns,
  }
}
