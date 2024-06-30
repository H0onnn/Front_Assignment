import { useDragAndDrop } from "hooks"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { DraggableList } from "components/drag"
import { getListStyle } from "utils"
import { Column } from "types/column"

export const DragColumns = () => {
  const { columns, onDragUpdate, handleDragEnd, invalidDrop } = useDragAndDrop()

  return (
    <DragDropContext onDragEnd={handleDragEnd} onDragUpdate={onDragUpdate}>
      <div className="flex justify-between space-x-2">
        {columns.map((column: Column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={getListStyle({ isDraggingOver: snapshot.isDraggingOver, invalidDrop })}
              >
                <h2>{column.title}</h2>
                <DraggableList items={column.items} invalidDrop={invalidDrop} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}
