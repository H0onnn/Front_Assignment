import { Draggable } from "react-beautiful-dnd"
import { Item } from "types/column"
import { getItemStyle } from "utils"

interface DraggableItemProps {
  item: Item
  index: number
}

export const DraggableItem = ({ item, index }: DraggableItemProps) => (
  <Draggable draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={getItemStyle({
          isDragging: snapshot.isDragging,
          draggableStyle: provided.draggableProps.style,
        })}
      >
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    )}
  </Draggable>
)
