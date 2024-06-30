import { useDragAndDrop } from "hooks"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { DraggableList } from "components/drag"
import { ColorBadge } from "components/common/ui"
import { getListStyle } from "utils"
import { Column } from "types/column"

export const DragColumns = () => {
  const { columns, onDragUpdate, onDragEnd, invalidDrop } = useDragAndDrop()

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <div className="flex justify-between space-x-2 h-full">
        {columns.map((column: Column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={getListStyle({ isDraggingOver: snapshot.isDraggingOver, invalidDrop })}
              >
                <div className="sticky top-0 z-10 bg-inherit">
                  <div className="flex items-center space-x-2 mb-2">
                    <ColorBadge columnType={column.title} />
                    <h2 className="font-semibold">{column.title}</h2>
                    <div className="bg-gray-300 rounded-full w-6 h-4 text-center text-xs text-gray-600">
                      {column.items.length}
                    </div>
                  </div>
                  <h3 className="text-sm text-gray-500">{column.subtitle}</h3>
                </div>
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
