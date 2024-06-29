import { useState } from "react"
import { DropResult } from "react-beautiful-dnd"
import { Column } from "types/column"
import { initialColumns } from "mock/dummy"

export const useDragAndDrop = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    const sourceColumnIndex = columns.findIndex((column) => column.id === source.droppableId)
    const destinationColumnIndex = columns.findIndex(
      (column) => column.id === destination.droppableId,
    )

    const sourceColumn = columns[sourceColumnIndex]
    const destinationColumn = columns[destinationColumnIndex]

    const [movedItem] = sourceColumn.items.splice(source.index, 1)

    destinationColumn.items.splice(destination.index, 0, movedItem)

    const newColumns = [...columns]
    newColumns[sourceColumnIndex] = sourceColumn
    newColumns[destinationColumnIndex] = destinationColumn

    setColumns(newColumns)
  }

  return {
    columns,
    onDragEnd,
  }
}
