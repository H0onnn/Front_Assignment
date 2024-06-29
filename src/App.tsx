import { useDragAndDrop } from "hooks/useDradAndDrop"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { DraggableList } from "components/drag-column"
import { getListStyle } from "utils"

const App = () => {
  const { onDragEnd, columns } = useDragAndDrop()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-around">
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={getListStyle(snapshot.isDraggingOver)}
              >
                <h2>{column.title}</h2>
                <DraggableList items={column.items} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
