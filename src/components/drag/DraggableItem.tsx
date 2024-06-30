import { useSelectedItemsContext } from "context/SelectedItemContext"
import { Draggable } from "react-beautiful-dnd"
import { Item } from "types/column"
import { cn, getItemStyle } from "utils"
import { SelectButton } from "./SelectButton"

interface DraggableItemProps {
  item: Item
  index: number
  invalidDrop: boolean
}

export const DraggableItem = ({ item, index, invalidDrop }: DraggableItemProps) => {
  const { selectedItems, toggleItemSelection } = useSelectedItemsContext()
  const isSelected = selectedItems.includes(item.id)

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn([
            getItemStyle({
              isDragging: snapshot.isDragging,
              draggableStyle: provided.draggableProps.style,
              invalidDrop,
              isSelected,
            }),
          ])}
        >
          <SelectButton isSelected={isSelected} onChange={() => toggleItemSelection(item.id)} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          {snapshot.isDragging && selectedItems.length > 0 && (
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-center">
              {selectedItems.length}
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}
