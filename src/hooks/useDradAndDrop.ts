import { useState, useCallback } from "react"
import { useSelectedItemsContext } from "context/SelectedItemContext"
import { DropResult, DragUpdate } from "react-beautiful-dnd"
import { useColumns } from "./useColumns"
import { Item } from "types/column"

export const useDragAndDrop = () => {
  const { columns, updateColumns } = useColumns()
  const [invalidDrop, setInvalidDrop] = useState<boolean>(false)
  const { selectedItems, setSelectedItems } = useSelectedItemsContext()

  const getColumnIndexById = (id: string): number => {
    return columns.findIndex((column) => column.id === id)
  }

  const isMoveAllowedColumn = (sourceIndex: number, destinationIndex: number): boolean => {
    return !(sourceIndex === 0 && destinationIndex === 2)
  }

  const isMoveAllowedItem = (sourceIndex: number, destinationIndex: number): boolean => {
    return !(sourceIndex % 2 === 1 && destinationIndex % 2 === 0 && sourceIndex < destinationIndex)
  }

  const onDragUpdate = useCallback(
    (update: DragUpdate) => {
      const { source, destination } = update

      if (!destination) {
        setInvalidDrop(false)
        return
      }

      const sourceColumnIndex = getColumnIndexById(source.droppableId)
      const destinationColumnIndex = getColumnIndexById(destination.droppableId)

      if (
        !isMoveAllowedColumn(sourceColumnIndex, destinationColumnIndex) ||
        !isMoveAllowedItem(source.index, destination.index)
      ) {
        setInvalidDrop(true)
      } else {
        setInvalidDrop(false)
      }
    },
    [columns], // eslint-disable-line react-hooks/exhaustive-deps
  )

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result

      setInvalidDrop(false)

      if (!destination) {
        return
      }

      const sourceColumnIndex = getColumnIndexById(source.droppableId)
      const destinationColumnIndex = getColumnIndexById(destination.droppableId)

      if (!isMoveAllowedColumn(sourceColumnIndex, destinationColumnIndex)) {
        return
      }

      if (!isMoveAllowedItem(source.index, destination.index)) {
        return
      }

      const sourceColumn = columns[sourceColumnIndex]
      const destinationColumn = columns[destinationColumnIndex]

      let itemsToMove: Item[]
      if (selectedItems.length > 0 && selectedItems.includes(result.draggableId)) {
        itemsToMove = sourceColumn.items.filter((item) => selectedItems.includes(item.id))
        sourceColumn.items = sourceColumn.items.filter((item) => !selectedItems.includes(item.id))
      } else {
        itemsToMove = [sourceColumn.items[source.index]]
        sourceColumn.items.splice(source.index, 1)
      }

      destinationColumn.items.splice(destination.index, 0, ...itemsToMove)

      const newColumns = [...columns]
      newColumns[sourceColumnIndex] = sourceColumn
      newColumns[destinationColumnIndex] = destinationColumn

      updateColumns(newColumns)

      setSelectedItems([])
    },
    [columns, updateColumns], // eslint-disable-line react-hooks/exhaustive-deps
  )

  return {
    columns,
    onDragEnd,
    onDragUpdate,
    invalidDrop,
  }
}
