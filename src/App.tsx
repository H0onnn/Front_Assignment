import React, { useState, useCallback } from "react"
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd"

interface Item {
  id: string
  content: string
}

function App() {
  const getItems = (count: number): Item[] =>
    Array.from({ length: count }, (_, k) => k).map((k) => ({
      id: `item-${k}`,
      content: `item ${k}`,
    }))

  const [items, setItems] = useState<Item[]>(getItems(10))

  const reorder = (list: Item[], startIndex: number, endIndex: number): Item[] => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return
      }

      const newItems = reorder(items, result.source.index, result.destination.index)

      setItems(newItems)
    },
    [items],
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const GRID = 8

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: React.CSSProperties | undefined,
): React.CSSProperties => ({
  userSelect: "none",
  padding: GRID * 2,
  margin: `0 0 ${GRID}px 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: GRID,
  width: 250,
})

export default App
